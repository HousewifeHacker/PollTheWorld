admin = User.create(username: "jessie", password: "jessie")
guest = User.create(username: "guest", password: "password")

q1 = admin.authored_polls.create(body: "Where would you rather visit?")
q1.answer_choices.create(body: "Paris, France")
q1.answer_choices.create(body: "Rome, Italy")
q1.answer_choices.create(body: "Istanbul, Turkey")

q2 = admin.authored_polls.create(body: "Are you feeling happy?")
q2.answer_choices.create(body: "Yes")
q2.answer_choices.create(body: "No" )
q2.answer_choices.create(body: "Close enough")

q3 = admin.authored_polls.create(body: "Which is the lesser evil?")
q3.answer_choices.create(body: "Vanity")
q3.answer_choices.create(body: "Greed")
q3.answer_choices.create(body: "Lust")

q4 = admin.authored_polls.create(body: "What is your talent?")
q4.answer_choices.create(body: "Singing")
q4.answer_choices.create(body: "Dancing")
q4.answer_choices.create(body: "Acting")
q4.answer_choices.create(body: "Other")