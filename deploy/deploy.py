import boto

AWS_ACCESS_KEY_ID = "HIDDEN"
AWS_SECRET_ACCESS_KEY = "HIDDEN"

bucket_name = AWS_ACCESS_KEY_ID.lower() + 'game name + version'
conn = boto.connect_s3(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)

bucket = conn.get_bucket('taddei_games')
bucket_list = bucket.list()
for item in bucket_list:
    key_string = str(item.key)
    print key_string
