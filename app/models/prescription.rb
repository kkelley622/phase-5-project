class Prescription < ApplicationRecord
    belongs_to :user 
    belongs_to :medication 

    validates :dose, presence: true 
    validates :frequency, presence: true 
end
