module Api
  module V1
    module Users
      class AdditionsController < ApplicationController
        def create
          raise ArgumentError, 'BadRequest Parameter' if payload.blank?
          user = User.find_by(user_id: payload['sub'])
          record = user.records.create!(data_params)
          render json: record, status: :ok
        end

        private

        def data_params
          params.require(:addition).permit(:accuracy, :number_of_correct_answer)
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
