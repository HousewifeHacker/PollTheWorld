admin = User.create!(username: "jessie", password: "jessie")
guest = User.create!(username: "guest", password: "password")

admin.authored_polls.create!(body: "Where would you rather visit?", answer_choices_attributes: [
  { body: "Istanbul, Turkey", ord: 0 },
  { body: "Paris, France", ord: 1 },
  { body: "Rome, Italy", ord: 2 }
])

admin.authored_polls.create!(body: "Are you feeling happy?",  answer_choices_attributes: [
  { body: "Close enough", ord: 2 },
  { body: "Yes", ord: 0 },
  { body: "No", ord: 1 }
])

admin.authored_polls.create!(body: "Which is the lesser evil?",  answer_choices_attributes: [
  { body: "Vanity", ord: 0 },
  { body: "Greed", ord: 1 },
  { body: "Lust", ord: 2 }
])

admin.authored_polls.create!(body: "What is your talent?",  answer_choices_attributes: [
  { body: "Other", ord: 3 },
  { body: "Singing", ord: 0 },
  { body: "Dancing", ord: 1 },
  { body: "Acting", ord: 2 }
])

admin.authored_polls.create!(body: "Agree or Disagree: The United States should increase its use of Ethanol",  answer_choices_attributes: [
  { body: "Disagree", ord: 1 },
  { body: "Agree", ord: 0 }
])

admin.authored_polls.create!(body: "Cats or Dogs?",  answer_choices_attributes: [
  { body: "Dogs", ord: 1 },
  { body: "Cats", ord: 0 }
])

admin.authored_polls.create!(body: "Which text editor do you prefer?",  answer_choices_attributes: [
  { body: "Other", ord: 3 },
  { body: "Emacs", ord: 0 },
  { body: "Vim", ord: 1 },
  { body: "Sublime", ord: 2 }
])

admin.authored_polls.create!(body: "Which came first?",  answer_choices_attributes: [
  { body: "The egg", ord: 1 },
  { body: "The chicken", ord: 0 }
])

admin.authored_polls.create!(body: "Agree or Disagree: The book is always better than the movie",  answer_choices_attributes: [
  { body: "Disagree", ord: 1 },
  { body: "Agree", ord: 0 }
])

admin.authored_polls.create!(body: "What is your favorite color?",  answer_choices_attributes: [
  { body: "White", ord: 9 },
  { body: "Brown", ord: 7 },
  { body: "Black", ord: 8 },
  { body: "Pink", ord: 0 },
  { body: "Red", ord: 1 },
  { body: "Orange", ord: 2 },
  { body: "Yellow", ord: 3 },
  { body: "Green", ord: 4 },
  { body: "Blue", ord: 5 },
  { body: "Purple", ord: 6 }
])

admin.authored_polls.create!(body: "What is your favorite sport?",  answer_choices_attributes: [
  { body: "other", ord: 7 },
  { body: "football (american)", ord: 1 },
  { body: "soccer", ord: 0 },
  { body: "basketball", ord: 2 },
  { body: "baseball", ord: 3 },
  { body: "hockey", ord: 6 },
  { body: "lacrosse", ord: 5 },
  { body: "wrestling", ord: 4 }
])
