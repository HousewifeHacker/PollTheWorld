json.array! @polls do |poll|
  json.extract! poll, :id, :body, :answer_choices	
end