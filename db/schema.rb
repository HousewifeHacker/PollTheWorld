# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140928225512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_choices", force: true do |t|
    t.integer  "poll_id"
    t.string   "body"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "responses_count"
    t.integer  "ord"
  end

  add_index "answer_choices", ["poll_id"], name: "index_answer_choices_on_poll_id", using: :btree

  create_table "polls", force: true do |t|
    t.integer  "user_id"
    t.string   "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "polls", ["user_id"], name: "index_polls_on_user_id", using: :btree

  create_table "responses", force: true do |t|
    t.integer  "answer_choice_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "respondent_id"
  end

  add_index "responses", ["answer_choice_id"], name: "index_responses_on_answer_choice_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
