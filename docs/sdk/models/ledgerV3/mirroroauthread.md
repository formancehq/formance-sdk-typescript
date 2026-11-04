# MirrorOAuthRead

## Example Usage

```typescript
import { MirrorOAuthRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MirrorOAuthRead = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `clientSecret`                                                                                | [ledgerV3.ClientSecret](../../../sdk/models/ledgerV3/clientsecret.md)                         | :heavy_minus_sign:                                                                            | Presence marker only; reusable secret material is never returned                              |
| `scopes`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tokenEndpoint`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | OAuth endpoint URL with userinfo (including passwordless tokens) and query credentials masked |