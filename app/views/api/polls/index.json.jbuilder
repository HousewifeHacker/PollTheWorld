json.models(@polls) do |poll|
  json.id poll.id
  json.user_id poll.user_id
  json.body poll.body
  json.answer_choices poll.answer_choices
  json.responses poll.responses
  json.created_at poll.created_at
  json.updated_at poll.updated_at
end

json.page_number @page_number

json.total_pages @total_pages