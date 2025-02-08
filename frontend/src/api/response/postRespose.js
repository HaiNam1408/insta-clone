import { v4 as uuidv4 } from 'uuid';

export class PostResponse {
  constructor(post) {
    this.id = post._id || uuidv4();
    this.userId = post.userId || '';
    this.avatar = post.avatar || '';
    this.username = post.username || '';
    this.createdAt = post.createdAt || Date.now();
    this.address = post.address || 0;
    this.postImage = (post.images && post.images[0] && post.images[0].path) || '';
    this.countFavorite = post.like || 0;
    this.countComment = (post.comments && post.comments.length) || 0;
    this.description = post.caption || '';
  }
}
