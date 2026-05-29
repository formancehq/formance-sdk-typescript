# ClientOptions2

## Example Usage

```typescript
import { ClientOptions2 } from "@formance/formance-sdk/sdk/models/auth";

let value: ClientOptions2 = {
  name: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `description`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `postLogoutRedirectUris` | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `public`                 | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `redirectUris`           | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `scopes`                 | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `trusted`                | *boolean*                | :heavy_minus_sign:       | N/A                      |