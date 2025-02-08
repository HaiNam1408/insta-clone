export class UserResponse {
  constructor(user) {
    this.id = user.response._id;
    this.username = user.response.username;
    this.fullName = user.response.fullName || '';
    this.avatar = user.response.avatar || '';
    this.token = user.accessToken || user.response.refreshToken || '';
    this.success = user.success;
    this.message = user.message;
    this.posts = user.response.posts || [];
    this.following = user.response.following || [];
  }
}
