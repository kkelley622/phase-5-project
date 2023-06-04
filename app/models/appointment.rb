class Appointment < ApplicationRecord
    belongs_to :user 
    belongs_to :provider 

    validates :date, presence: true
    validates :location, presence: true 
    validates :time, presence: true 
end
