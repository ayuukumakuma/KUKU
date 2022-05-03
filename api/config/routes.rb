Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace 'users' do
        resources :registrations, only: [:create]
      end
    end
  end
end
