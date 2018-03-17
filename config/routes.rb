Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'
  resources :prototypes do
    resources :likes, only: [:create, :destroy]
  		resources :comments, only: [:create, :edit, :destroy, :update]
  		collection do
  				get 'newest'
  		end
  end
  resources :users, only: [:show, :edit, :update]
end
