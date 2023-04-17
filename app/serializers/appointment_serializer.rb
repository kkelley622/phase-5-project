class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user, :provider, :date, :location
end
