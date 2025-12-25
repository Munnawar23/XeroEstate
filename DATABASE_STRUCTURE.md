# Database Structure Reference

## Collections Overview

```
XeroEstate Database (69499965001be909fea0)
│
├── properties
│   ├── $id (string, indexed)
│   ├── name (string, required, size: 5000)
│   ├── description (string, required, size: 5000)
│   ├── address (string, required, size: 7000)
│   ├── price (integer, required, min: 0)
│   ├── area (double, required, min: 0)
│   ├── bedrooms (integer, required)
│   ├── bathrooms (integer, required)
│   ├── rating (double, required)
│   ├── image (url, required)
│   ├── geolocation (string, required, size: 1000)
│   ├── type (enum, required)
│   ├── facilities[] (enum)
│   ├── agent (relationship → agents, Many to One)
│   ├── gallery (relationship → galleries, One to Many)
│   ├── reviews (relationship → reviews, Many to One)
│   ├── $createdAt (datetime)
│   └── $updatedAt (datetime)
│
├── agents
│   ├── $id (string, indexed)
│   ├── email (email, required)
│   ├── name (string, required, size: 50)
│   ├── url (url, required)
│   ├── $createdAt (datetime)
│   └── $updatedAt (datetime)
│
├── reviews
│   ├── $id (string, indexed)
│   ├── name (string, required, size: 500)
│   ├── avatar (url)
│   ├── review (string, required, size: 5000)
│   ├── rating (double, required, min: 0, max: 5)
│   ├── $createdAt (datetime)
│   └── $updatedAt (datetime)
│
└── galleries
    ├── $id (string, indexed)
    ├── image (url, required)
    ├── $createdAt (datetime)
    └── $updatedAt (datetime)
```

## Property Types (Enum Values)

The `type` field in the properties collection can have these values:

- House
- Townhouse
- Duplex
- Studio
- Villa
- Apartment
- Other

## Relationships

### Properties → Agents

- Type: Many to One
- A property can have one agent
- An agent can have multiple properties

### Properties → Reviews

- Type: One to Many
- A property can have multiple reviews
- A review belongs to one property

### Properties → Galleries

- Type: One to Many
- A property can have multiple gallery images
- A gallery image belongs to one property

## Sample Data Structure

### Property Document

```json
{
  "$id": "unique_property_id",
  "name": "Sunset Villa",
  "address": "123 Ocean Drive, Miami, FL 33139",
  "price": 750000,
  "bedrooms": 4,
  "bathrooms": 3,
  "type": "Villa",
  "description": "Beautiful oceanfront villa with stunning sunset views...",
  "area": 2500.5,
  "rating": 4.8,
  "image": "https://example.com/property.jpg",
  "$createdAt": "2024-01-15T10:30:00.000Z",
  "$updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Agent Document

```json
{
  "$id": "unique_agent_id",
  "name": "Sarah Johnson",
  "email": "sarah.j@xeroestate.com",
  "url": "https://example.com/agents/sarah",
  "$createdAt": "2024-01-15T10:30:00.000Z",
  "$updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Review Document

```json
{
  "$id": "unique_review_id",
  "name": "John Doe",
  "avatar": "https://example.com/avatars/john.jpg",
  "review": "Amazing property! Great location and amenities.",
  "rating": 4.5,
  "properties": "property_id_reference",
  "$createdAt": "2024-01-15T10:30:00.000Z",
  "$updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Gallery Document

```json
{
  "$id": "unique_gallery_id",
  "image": "https://example.com/gallery/image1.jpg",
  "$createdAt": "2024-01-15T10:30:00.000Z",
  "$updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## Indexes

### Properties Collection

- `$id` - Primary index (auto-created)
- Consider adding indexes on:
  - `type` - For filtering by property type
  - `price` - For price range queries
  - `rating` - For sorting by rating
  - `$createdAt` - For sorting by date

### Agents Collection

- `$id` - Primary index (auto-created)
- `email` - Unique index (recommended)

### Reviews Collection

- `$id` - Primary index (auto-created)
- `properties` - For querying reviews by property

### Galleries Collection

- `$id` - Primary index (auto-created)

## Permissions

Make sure to set appropriate permissions in Appwrite:

### Recommended Permissions:

- **Read**: Any authenticated user
- **Create**: Authenticated users (for reviews, favorites)
- **Update**: Property owners/admins only
- **Delete**: Property owners/admins only

## Query Examples

### Get all properties

```typescript
databases.listDocuments(databaseId, "properties", [
  Query.orderDesc("$createdAt"),
  Query.limit(100),
]);
```

### Search properties by name

```typescript
databases.listDocuments(databaseId, "properties", [
  Query.search("name", "villa"),
]);
```

### Filter by property type

```typescript
databases.listDocuments(databaseId, "properties", [
  Query.equal("type", "Villa"),
]);
```

### Get property with relationships

```typescript
const property = await databases.getDocument(
  databaseId,
  "properties",
  propertyId
);
// Then fetch related data separately
const reviews = await databases.listDocuments(databaseId, "reviews", [
  Query.equal("properties", propertyId),
]);
```
