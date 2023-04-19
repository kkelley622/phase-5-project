class ProcedureSerializer < ActiveModel::Serializer
  attributes :id, :description, :date, :user_id

  belongs_to :user 
end
