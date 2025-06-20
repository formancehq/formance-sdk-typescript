# ClientOptions

## Example Usage

```typescript
import { ClientOptions } from "@formance/formance-sdk/sdk/models/shared";

let value: ClientOptions = {
  name: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `description`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `metadata`               | Record<string, *any*>    | :heavy_minus_sign:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `postLogoutRedirectUris` | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `public`                 | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `redirectUris`           | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `scopes`                 | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `trusted`                | *boolean*                | :heavy_minus_sign:       | N/A                      |