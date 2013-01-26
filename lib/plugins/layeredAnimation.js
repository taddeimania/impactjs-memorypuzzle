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
                this.data = null;
            },

            addLayer: function( path, dx, dy, px )
            {
                var found = false;
                if (!dx) dx = 0;
                if (!px) px = 0;
                if (!dy) dy = 0;

                for(var i=0; i < this.numLayers; i++) {
                    if (this.layers[i].img.path == path && this.layers[i].dx==dx && this.layers[i].px==px && this.layers[i].dy==dy) {
                        if (!this.layers[i].active) {
                            this.layers[i].active = true;
                            this.numActiveLayers++;
                        }
                        found = true;
                    }
                }
                if (!found) {
                    this.layers.push({
                        img: new ig.Image( path ),
                        dx: dx,
                        dy: dy,
                        px: px,
                        active: true
                    });
                    this.numLayers++;
                    this.numActiveLayers++;
                }
                this.composited = false;
                this.data = null;
            },

            removeLayer: function( path, dx, dy, px )
            {
                var found = false,
                    i;

                if (!dx) dx = 0;
                if (!px) px = 0;
                if (!dy) dy = 0;

                for(i=0; i < this.numLayers; i++) {
                    if (this.layers[i].img.path == path && this.layers[i].dx==dx && this.layers[i].px==px  && this.layers[i].dy==dy) {
                        this.layers[i].active = false;
                        this.numActiveLayers--;
                        this.composited = false;
                        this.data = null;
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
                        data: null,
                        layers: []
                    };

                for(i=0; i < this.numLayers; i++) {
                    if (this.layers[i].active) {
                        state.layers.push( this.layers[i] );
                    }
                }
                state.data = this.createComposite(state.layers);
                this.states.push( state );
            },

            revertToState: function( name )
            {
                var i, len;

                for(i=0, len = this.states.length; i < len; i++) {
                    if (this.states[i].name == name) {
                        this.data = this.states[i].data;
                        this.layers = this.states[i].layers.slice();
                        if (!this.data) {
                            // we didn't store a composite, so create one now
                            this.data = this.createComposite(this.layers);
                            // and also try and store it so we don't have to create another later
                            this.states[i].data = this.data;
                        }
                        this.numLayers = this.states[i].layers.length;
                        this.numActiveLayers = this.numLayers; // all layers active
                        this.composited = (this.data) ? true : false;

                        return true;
                    }
                }

                return false;
            },

            createComposite: function( layers )
            {
                var bufferCanvas = ig.$new( 'canvas' ),
                    buffer = bufferCanvas.getContext( '2d' ),
                    i,
                    len;

                bufferCanvas.width = this.image.data.width;
                bufferCanvas.height = this.image.data.height;

                buffer.drawImage( this.copyImage.data, 0, 0 );

                for(i=0, len=layers.length; i < len; i++) {
                    if (layers[i].active) {
                        var dx = layers[i].dx;
                        buffer.drawImage( layers[i].img.data, dx, layers[i].dy );
                        if (layers[i].px>0) {
                            dx += layers[i].px;
                            while (dx<this.image.data.width) {
                                buffer.drawImage( layers[i].img.data, dx, layers[i].dy );
                                dx += layers[i].px;
                            }
                        }
                    }
                }

                return bufferCanvas;
            }
        });

        ig.Animation.inject({

            update: function()
            {
                var layersLoaded = true,
                    i;

                if (!this.sheet.composited) {

                    if (!this.sheet.image.loaded || !this.sheet.copyImage || !this.sheet.copyImage.loaded) {
                        layersLoaded = false;
                    } else {
                        for(i=0; i < this.sheet.numLayers; i++) {
                            if (this.sheet.layers[i].active && !this.sheet.layers[i].img.loaded) {
                                layersLoaded = false;
                                break;
                            }
                        }
                    }

                    if (layersLoaded) {

                        if (!this.sheet.composited) {
                            this.sheet.data = this.sheet.createComposite( this.sheet.layers );
                        }
                        if (this.sheet.data) {
                            this.sheet.composited = true;
                            this.sheet.image.data = this.sheet.data;
                        }
                    }
                } else {
                    this.sheet.image.data = this.sheet.data;
                }

                this.parent();
            }
        });
    });