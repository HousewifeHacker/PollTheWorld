json.array! @polls do |poll|
  json.extract! poll, :id, :body, :answer_choices, :created_at, :updated_at
end