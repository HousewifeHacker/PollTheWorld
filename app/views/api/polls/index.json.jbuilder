json.array! @polls do |poll|
  json.extract! poll, :id, :user_id, :body, :answer_choices, :responses, :created_at, :updated_at
end