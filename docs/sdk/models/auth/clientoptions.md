# ClientOptions

## Example Usage

```typescript
import { ClientOptions } from "@formance/formance-sdk/sdk/models/auth";

let value: ClientOptions = {
  name: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | Human-readable description of the client                                            |
| `metadata`                                                                          | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | Arbitrary key/value pairs attached to the resource                                  |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Display name of the client                                                          |
| `postLogoutRedirectUris`                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | URIs the authorization server may redirect to after logout                          |
| `public`                                                                            | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the client is public, meaning it cannot keep a secret and uses PKCE instead |
| `redirectUris`                                                                      | *string*[]                                                                          | :heavy_minus_sign:                                                                  | URIs the authorization server may redirect to after a successful authorization      |
| `scopes`                                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Scopes the client is allowed to request                                             |
| `trusted`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the client is trusted, skipping the user consent screen                     |