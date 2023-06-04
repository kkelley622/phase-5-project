class Procedure < ApplicationRecord
    belongs_to :user
    
    validates :description, presence: true
    validates :date, presence: true 
end
