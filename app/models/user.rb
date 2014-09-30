class User < ActiveRecord::Base
  has_many :authored_polls,
            foreign_key: :user_id,
            class_name: 'Poll'
  has_many :responses,
            foreign_key: :respondent_id,
            class_name: 'Response'
  has_many :answered_polls, through: :responses, source: :poll

  validates :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true, presence: true, unless: :guest?
  
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.new_guest
    new { |u| u.guest = true }
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
