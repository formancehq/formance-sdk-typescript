# ListUsersResponse

## Example Usage

```typescript
import { ListUsersResponse } from "@formance/formance-sdk/sdk/models/auth";

let value: ListUsersResponse = {
  data: [
    {
      email: "user1@orga1.com",
      id: "3bb03708-312f-48a0-821a-e765837dc2c4",
      subject: "Jane Doe",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `data`                                          | [auth.User](../../../sdk/models/auth/user.md)[] | :heavy_minus_sign:                              | N/A                                             |