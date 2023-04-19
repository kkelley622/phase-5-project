class Medication < ApplicationRecord
    has_many :prescriptions
    has_many :users, through: :prescriptions

    validates :generic_name, uniqueness: true 
end
