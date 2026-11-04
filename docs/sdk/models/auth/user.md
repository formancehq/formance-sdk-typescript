# User

A user known to the stack's identity provider

## Example Usage

```typescript
import { User } from "@formance/formance-sdk/sdk/models/auth";

let value: User = {
  email: "user1@orga1.com",
  id: "3bb03708-312f-48a0-821a-e765837dc2c4",
  subject: "Jane Doe",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `email`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Email address of the user                                     | user1@orga1.com                                               |
| `id`                                                          | *string*                                                      | :heavy_minus_sign:                                            | Unique identifier of the user                                 | 3bb03708-312f-48a0-821a-e765837dc2c4                          |
| `subject`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Subject claim identifying the user with the identity provider | Jane Doe                                                      |