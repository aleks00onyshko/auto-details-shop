import { Post } from './post.ts';
import { Comment } from './comment.ts';

export interface DashboardSummary {
  atGlance: {
    posts: number;
    reviews: number;
    pages: number;
  };
  latestNews?: Post;
  latestReview?: Comment;
  totalCategories: number;
  isLoading: boolean;
}
