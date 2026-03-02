import { User } from '@core/models';

export interface Comment {
  id: number;
  body: string;
  user: Pick<User, 'username'>;
}

export interface CommentResponse {
  comments: Comment[];
  total: number;
}
