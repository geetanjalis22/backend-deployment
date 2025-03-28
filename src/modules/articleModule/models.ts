// src/modules/article/articleModule/models.ts
import mongoose, { Document, Schema, Model } from 'mongoose';
import { IArticle } from './interfaces';

export interface ArticleDocument extends IArticle, Document {
  _id: mongoose.Types.ObjectId;
}

const ArticleSchema: Schema = new Schema<ArticleDocument>({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Article: Model<ArticleDocument> = mongoose.model<ArticleDocument>('Article', ArticleSchema);