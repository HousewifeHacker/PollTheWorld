class Api::UrlsController < ApplicationController
  def shorten
    url = Googl.shorten(params[:long_url])
    render json: { short_url: url.short_url }
  end
end
