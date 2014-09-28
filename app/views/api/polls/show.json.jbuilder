json.extract! @poll, :id, :body, :created_at, :updated_at

json.answer_choices @poll.answer_choices do |choice|
  json.extract! choice, :ord, :id, :body, :responses_count, :created_at, :updated_at
end
