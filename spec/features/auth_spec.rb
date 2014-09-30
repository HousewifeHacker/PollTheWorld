require 'spec_helper'

feature "Sign up" do
  before :each do
    visit "/users/new"
  end

  it "has a user sign up page" do
    page.should have_content "Sign Up"
  end

  it "takes a username and password" do
    page.should have_content "Username"
    page.should have_content "Password"
  end

  it "validates the presence of the user's username" do
    click_button 'Sign Up'
    page.should have_content 'Sign Up'
    page.should have_content "Username can't be blank"
  end

  it "rejects a blank (zero-length) password" do
    fill_in "Username", with: 'hello_world'
    click_button 'Sign Up'
    page.should have_content 'Sign Up'
    page.should have_content 'Password is too short'
  end

  it "validates that the password is at least 6 characters long" do
    fill_in "Username", with: 'hello_world'
    fill_in "Password", with: 'short'
    click_button 'Sign Up'
    page.should have_content 'Sign Up'
    page.should have_content 'Password is too short'
  end
end

feature "Sign out" do
  it "has a sign out link" do
    sign_up_as_hello_world
    page.should have_link 'Sign Out'
  end
end

feature "Sign in" do
  it "has a sign in page" do
    visit "/session/new"
    page.should have_content "Sign In"
  end

  it "takes a username and password" do
    visit "/session/new"
    page.should have_content "Username"
    page.should have_content "Password"
  end

  it "returns to sign in on failure" do
    visit "/session/new"
    fill_in "Username", with: 'hello_world'
    fill_in "Password", with: 'hello'
    click_button "Sign In"

    # return to sign-in page
    page.should have_content "Sign In"
    page.should have_content "Username"
  end
end
