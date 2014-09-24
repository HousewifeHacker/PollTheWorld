json.extract! @poll, :id, :body, :created_at, :updated_at

json.answer_choices @poll.answer_choices do |choice|
  json.extract! choice, :id, :body, :created_at, :updated_at
end