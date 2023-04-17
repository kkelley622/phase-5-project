class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :medication_id, :dose, :frequency, :start_date, :end_date
end
