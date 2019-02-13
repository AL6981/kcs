Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :about, only: [:index] do
  end

  resources :gallery, only: [:index, :show] do
  end

  resources :contact, only: [:index] do
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
