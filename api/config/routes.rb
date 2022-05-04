Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace 'users' do
        resources :registrations, only: [:create]
        resources :additions, only: [:create]
        resources :acquisitions , only: [:index]
      end
    end
  end
end
