class Record < ApplicationRecord
  belongs_to :user, primary_key: :user_id
end
