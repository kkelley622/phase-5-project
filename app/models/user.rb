class User < ApplicationRecord
    has_secure_password 
    
    has_many :appointments
    has_many :providers, through: :appointments
    has_many :prescriptions
    has_many :medications, through: :prescriptions
    has_many :problems
    has_many :procedures

end
