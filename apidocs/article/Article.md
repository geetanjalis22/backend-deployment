#  API Documentation for Article in CRUD Article Management API 
##  **Article Endpoints**
---
## Base URL
```
http://localhost:5000/api
```
---
## Interfaces
// Article Interface
interface Article {
  _id: string;
  title: string;
  description: string;
  body: string;
  image_url?: string;
  category: string; // Category ID
  tags: string[]; // Array of Tag IDs
  createdAt: string; // ISO Date String
  id: string; // Custom article ID
  date: string; // Formatted Date
  time: string; // Formatted Time
  name: string; // Article Name
}
---
#### ➤ Create Article
**POST** `/articles`

**Request Body:**
```json
{
  "title": "Introduction to MongoDB",
  "description": "A comprehensive MongoDB guide",
  "body": "MongoDB is a NoSQL database...",
  "image_url": "https://example.com/image.jpg",
  "category": "605c72b4f1f1c23a04d5f654",
  "tags": ["605c72b4f1f1c23a04d5f654"]
}
```

**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "title": "Introduction to MongoDB",
  "description": "A comprehensive MongoDB guide",
  "category": "Technology",
  "tags": ["Database", "NoSQL"]
}
```

#### ➤ Get All Articles
**GET** `/articles`

**Response:**
```json
[
  {
    "_id": "605c72b4f1f1c23a04d5f654",
    "title": "Introduction to MongoDB",
    "description": "A comprehensive MongoDB guide",
    "category": "Technology",
    "tags": ["Database", "NoSQL"]
  }
]
```
#### ➤ Update Article
**PUT** `/articles/:id`

**Request Body:**
```json
{
  "title": "Advanced MongoDB",
  "description": "In-depth MongoDB features"
}
```

**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "title": "Advanced MongoDB",
  "description": "In-depth MongoDB features"
}
```

#### ➤ Delete Article
**DELETE** `/articles/:id`

**Response:**
```json
{
  "message": "Article deleted successfully"
}
```