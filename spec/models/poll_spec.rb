describe Poll do
  it { should belong_to(:user) }
  it { should have_many(:answer_choices) }
  it { should have_many(:responses) }
  it { should have_many(:respondents) }
  it { should accept_nested_attributes_for(:answer_choices) }
end
