Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace 'users' do
        resources :registrations, only: [:create]
        resources :additions, only: [:create]
        get 'acquisitions' => 'acquisitions#index'
      end
    end
  end
end
