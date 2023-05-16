class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at

  belongs_to :user 
end
