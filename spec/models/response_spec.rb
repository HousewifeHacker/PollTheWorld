describe Response do
  it { should belong_to(:answer_choice) }
  it { should belong_to(:respondent) }
  it { should have_one(:poll) }
end
