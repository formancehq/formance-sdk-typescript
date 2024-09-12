# Security

## Example Usage

```typescript
import { Security } from "@formance/formance-sdk/sdk/models/shared";

let value: Security = {
  clientID: "<value>",
  clientSecret: "<value>",
  tokenURL: "/api/auth/oauth/token",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientID`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `tokenURL`         | *string*           | :heavy_check_mark: | N/A                |