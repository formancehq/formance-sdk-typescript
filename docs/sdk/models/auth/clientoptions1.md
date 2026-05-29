# ClientOptions1

## Example Usage

```typescript
import { ClientOptions1 } from "@formance/formance-sdk/sdk/models/auth";

let value: ClientOptions1 = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `metadata`                                                      | Record<string, *string*>                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `description`                                                   | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `postLogoutRedirectUris`                                        | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `public`                                                        | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             |
| `redirectUris`                                                  | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `scopes`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `secrets`                                                       | [auth.ClientSecret](../../../sdk/models/auth/clientsecret.md)[] | :heavy_minus_sign:                                              | N/A                                                             |
| `trusted`                                                       | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             |