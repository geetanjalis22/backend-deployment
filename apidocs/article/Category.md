# API Documentation for CRUD Article Management API

## Overview
This documentation provides detailed information about the endpoints, request formats, and sample responses for the CRUD Article Management API built with TypeScript, ExpressJS, MongoDB, and Joi.

---
## Base URL
```
http://localhost:5000/api
```
---
## Interfaces
// Category Interface
interface Category {
  _id: string;
  name: string;
  description?: string;
}

---
## Endpoints

### 1. **Category Endpoints**

#### ➤ Create Category
**POST** `/categories`

**Request Body:**
```json
{
  "name": "Technology",
  "description": "All about tech"
}
```
**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "name": "Technology",
  "description": "All about tech"
}
```

#### ➤ Get All Categories
**GET** `/categories`

**Response:**
```json
[
  {
    "_id": "605c72b4f1f1c23a04d5f654",
    "name": "Technology",
    "description": "All about tech"
  }
]
```

#### ➤ Update Category
**PUT** `/categories/:id`

**Request Body:**
```json
{
  "name": "Updated Technology",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "name": "Updated Technology",
  "description": "Updated description"
}
```

#### ➤ Delete Category
**DELETE** `/categories/:id`

**Response:**
```json
{
  "message": "Category deleted successfully"
}
```
