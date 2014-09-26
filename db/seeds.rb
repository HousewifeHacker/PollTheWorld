admin = User.create!(username: "jessie", password: "jessie")
guest = User.create!(username: "guest", password: "password")

q1 = admin.authored_polls.create!(body: "Where would you rather visit?")
q1.answer_choices.create!(body: "Istanbul, Turkey")
q1.answer_choices.create!(body: "Paris, France")
q1.answer_choices.create!(body: "Rome, Italy")

q2 = admin.authored_polls.create!(body: "Are you feeling happy?")
q2.answer_choices.create!(body: "Close enough")
q2.answer_choices.create!(body: "Yes")
q2.answer_choices.create!(body: "No" )

q3 = admin.authored_polls.create!(body: "Which is the lesser evil?")
q3.answer_choices.create!(body: "Vanity")
q3.answer_choices.create!(body: "Greed")
q3.answer_choices.create!(body: "Lust")

q4 = admin.authored_polls.create!(body: "What is your talent?")
q4.answer_choices.create!(body: "Other")
q4.answer_choices.create!(body: "Singing")
q4.answer_choices.create!(body: "Dancing")
q4.answer_choices.create!(body: "Acting")

q5 = admin.authored_polls.create!(body: "Agree or Disagree: The United States should increase its use of Ethanol")
q5.answer_choices.create!(body: "Disagree")
q5.answer_choices.create!(body: "Agree")

q6 = admin.authored_polls.create!(body: "Cats or Dogs?")
q6.answer_choices.create!(body: "Dogs")
q6.answer_choices.create!(body: "Cats")

q7 = admin.authored_polls.create!(body: "Which text editor do you prefer?")
q7.answer_choices.create!(body: "Other")
q7.answer_choices.create!(body: "Emacs")
q7.answer_choices.create!(body: "Vim")
q7.answer_choices.create!(body: "Sublime")

q8 = admin.authored_polls.create!(body: "Which came first?")
q8.answer_choices.create!(body: "The egg")
q8.answer_choices.create!(body: "The chicken")