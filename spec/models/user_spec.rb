describe User do
  it { should have_many(:authored_polls) }
  it { should have_many(:responses) }
  it { should have_many(:answered_polls) }
end
