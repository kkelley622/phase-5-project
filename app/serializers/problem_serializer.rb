class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :description

  belongs_to :user 
end
