FirebaseIdToken.configure do |config|
  config.redis = Redis.new
  config.project_ids = ['kuku-71c83']
end
