module Api
  module V1
    module Users
      class RegistrationsController < ApplicationController
        def create
          raise ArgumentError, 'BadRequest Parameter' if payload.blank?
          user = User.create!(sign_up_params.merge(user_id: payload['sub']))
          render json: user, status: :ok
        end

        private

        def sign_up_params
          params.require(:registration).permit(:email)
        end

        def token_from_request_headers
          request.headers['Authorization']&.split&.last
        end

        def token
          params[:token] || token_from_request_headers
        end

        def payload
          @payload ||= FirebaseIdToken::Signature.verify token
        end
      end
    end
  end
end
