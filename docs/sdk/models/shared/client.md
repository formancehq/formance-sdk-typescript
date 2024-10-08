# Client

## Example Usage

```typescript
import { Client } from "@formance/formance-sdk/sdk/models/shared";

let value: Client = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `metadata`                                                          | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `postLogoutRedirectUris`                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `public`                                                            | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |
| `redirectUris`                                                      | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `scopes`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `secrets`                                                           | [shared.ClientSecret](../../../sdk/models/shared/clientsecret.md)[] | :heavy_minus_sign:                                                  | N/A                                                                 |
| `trusted`                                                           | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |