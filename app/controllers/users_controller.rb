class UsersController < ApplicationController
  def search
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").where.not(id: current_user.id).limit(20)
     respond_to do |format|
      # format.html
      format.json
   end
  end

  def edit
  end

end
