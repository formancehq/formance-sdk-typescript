# Client

An OAuth2 client registered on the stack

## Example Usage

```typescript
import { Client } from "@formance/formance-sdk/sdk/models/auth";

let value: Client = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | Human-readable description of the client                                            |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `metadata`                                                                          | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | Arbitrary key/value pairs attached to the resource                                  |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Display name of the client                                                          |
| `postLogoutRedirectUris`                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | URIs the authorization server may redirect to after logout                          |
| `public`                                                                            | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the client is public, meaning it cannot keep a secret and uses PKCE instead |
| `redirectUris`                                                                      | *string*[]                                                                          | :heavy_minus_sign:                                                                  | URIs the authorization server may redirect to after a successful authorization      |
| `scopes`                                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Scopes the client is allowed to request                                             |
| `secrets`                                                                           | [auth.ClientSecret](../../../sdk/models/auth/clientsecret.md)[]                     | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `trusted`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the client is trusted, skipping the user consent screen                     |