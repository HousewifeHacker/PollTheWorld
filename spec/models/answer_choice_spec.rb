describe AnswerChoice do
  it { should belong_to(:poll) }
  it { should have_many(:responses) }
  it { should have_many(:respondents) }
end
