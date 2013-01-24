ig.module(
    'plugins.layeredAnimation'
)
    .requires(
    'impact.animation'
)
.defines( function()
{

    ig.AnimationSheet.inject({


        init: function( path, width, height )
        {
            this.parent( path, width, height );

            this.copyImage = new ig.Image( path+'?nocache=true' );
            this.layers = [];
            this.states = [];
            this.numLayers = 0;
            this.numActiveLayers = 0;
            this.composited = false;
            this.forceRedraw = false;
            this.currentState = null;
            this.updateData = false;
        },


        addLayer: function( path )
        {
            var found = false;

            for(i=0; i < this.numLayers; i++) {
                if (this.layers[i].img.path == path) {
                    this.layers[i].active = true;
                    found = true;
                }
            }
            if (!found) {
                this.layers.push({
                    img: new ig.Image( path ),
                    active: true
                });
                this.numLayers++;
            }
            this.composited = false;
            this.numActiveLayers++;
        },


        removeLayer: function( path )
        {
            var found = false,
                i;

            for(i=0; i < this.numLayers; i++) {
                if (this.layers[i].img.path == path) {
                    this.layers[i].active = false;
                    this.numActiveLayers--;
                    this.composited = false;
                    this.forceRedraw = true;
                    found = true;
                }
            }

            return found;
        },


        saveState: function( name )
        {
            var i,
                state = {
                    name: name,
                    composited: false,
                    data: null,
                    layers: []
                };

            for(i=0; i < this.numLayers; i++) {
                if (this.layers[i].active) {
                    state.layers.push( this.layers[i] );
                }
            }

            this.states.push( state );
            this.currentState = name;
        },


        revertToState: function( name )
        {
            var i, len;

            for(i=0, len = this.states.length; i < len; i++) {
                if (this.states[i].name == name) {
                    this.updateData = this.states[i].data;
                    this.layers = this.states[i].layers;
                    this.currentState = name;

                    return true;
                }
            }

            return false;
        }

    });


    ig.Animation.inject({


        update: function()
        {
            var layersLoaded = true,
                allStatesComposited = true,
                data,
                i,
                len;

            if (!this.sheet.composited && (this.sheet.forceRedraw || this.sheet.numLayers > 0)) {

                if (!this.sheet.image.loaded || !this.sheet.copyImage.loaded) {
                    layersLoaded = false;
                } else {
                    for(i=0; i < this.sheet.numLayers; i++) {
                        if (!this.sheet.layers[i].img.loaded) {
                            layersLoaded = false;
                            break;
                        }
                    }
                }

                if (layersLoaded) {

                    if (this.sheet.states.length == 0) {
                        data = this.createComposite( this.sheet.layers );

                        if (data) {
                            this.sheet.composited = true;
                            this.sheet.image.data = data;
                            this.sheet.forceRedraw = false;
                        }
                    } else {

                        for(i=0, len=this.sheet.states.length; i < len; i++) {

                            data = this.createComposite( this.sheet.states[i].layers );
                            if (data) {
                                this.sheet.states[i].composited = true;
                                this.sheet.states[i].data = data;
                            } else {
                                allStatesComposited = false;
                            }
                        }

                        if (allStatesComposited) {
                            this.sheet.forceRedraw = false;
                            this.sheet.composited = true;
                            this.sheet.image.data = data;
                        }
                    }
                }
            } else if (this.sheet.updateData) {

                this.sheet.image.data = this.sheet.updateData;
                this.sheet.updateData = false;
            }

            this.parent();
        },


        createComposite: function( layers )
        {
            var bufferCanvas = ig.$new( 'canvas' ),
                buffer = bufferCanvas.getContext( '2d' ),
                data,
                i,
                len;

            bufferCanvas.width = this.sheet.image.data.width;
            bufferCanvas.height = this.sheet.image.data.height;

            buffer.drawImage( this.sheet.copyImage.data, 0, 0 );

            for(i=0, len=layers.length; i < len; i++) {
                if (layers[i].active) {
                    buffer.drawImage( layers[i].img.data, 0, 0 );
                }
            }

            return bufferCanvas;
        }


    });

});