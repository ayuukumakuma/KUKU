module Api
  module V1
    module Users
      class AcquisitionsController < ApplicationController
        def index
          # raise ArgumentError, 'BadRequest Parameter' if payload.blank?
          user = User.find_by(user_id: payload['sub'])
          record = user
          render json: record, status: :ok
        end

        private

        def before_date
          params.require(:acquisition).permit(:before_date)
        end

        def after_date
          params.require(:acquisition).permit(:after_date)
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
