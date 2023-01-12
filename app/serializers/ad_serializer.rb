class AdSerializer < ActiveModel::Serializer
  attributes :id, :company, :ad_text, :ad_image
end
