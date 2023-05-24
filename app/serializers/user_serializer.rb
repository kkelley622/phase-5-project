class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :dob, :password_digest
  has_many :providers
end
