FactoryBot.define do
    factory :message do
      content {Faker::Lorem.sentence}
      image {File.open("#{Rails.root}/public/uploads/message/image/33/no_image.jpg")}
      user
      group
    end
  end