# API Documentation for Tag in CRUD Article Management API 
## **Tag Endpoints**
---
## Base URL
```
http://localhost:5000/api
```
---
## Interfaces
// Tag Interface
interface Tag {
  _id: string;
  name: string;
  description?: string;
}
---
#### ➤ Create Tag
**POST** `/tags`

**Request Body:**
```json
{
  "name": "Web Development",
  "description": "Front-end and back-end technologies"
}
```

**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "name": "Web Development",
  "description": "Front-end and back-end technologies"
}
```

#### ➤ Get All Tags
**GET** `/tags`

**Response:**
```json
[
  {
    "_id": "605c72b4f1f1c23a04d5f654",
    "name": "Web Development",
    "description": "Front-end and back-end technologies"
  }
]
```

#### ➤ Update Tag
**PUT** `/tags/:id`

**Request Body:**
```json
{
  "name": "Updated Tag",
  "description": "Updated tag details"
}
```

**Response:**
```json
{
  "_id": "605c72b4f1f1c23a04d5f654",
  "name": "Updated Tag",
  "description": "Updated tag details"
}
```

#### ➤ Delete Tag
**DELETE** `/tags/:id`

**Response:**
```json
{
  "message": "Tag deleted successfully"
}
```
