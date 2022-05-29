desc "Request Google's x509 certificates and override Redis"
task certificates_force_request: :environment do
  FirebaseIdToken::Certificates.request!
  puts 'certificates_force_request:success'
end

desc "Request Google's x509 certificates when Redis is empty"
task certificates_request: :environment do
  FirebaseIdToken::Certificates.request
  puts 'certificates_request:success'
end
