class AdSerializer < ActiveModel::Serializer
  attributes :id, :company, :ad_text, :ad_image
  has_many :ad_clicks
  has_many :users, through: :ad_clicks
end
