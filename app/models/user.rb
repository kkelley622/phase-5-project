class User < ApplicationRecord
    has_many :appointments
    has_many :providers, through: :appointments
    has_many :medications
    has_many :problems
    has_many :procedures
end
