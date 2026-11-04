# HttpMirrorSourceRead

## Example Usage

```typescript
import { HttpMirrorSourceRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: HttpMirrorSourceRead = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `baseUrl`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | Source URL with userinfo (including passwordless tokens) and query credentials masked |
| `oauth2ClientCredentials`                                                             | [ledgerV3.MirrorOAuthRead](../../../sdk/models/ledgerV3/mirroroauthread.md)           | :heavy_minus_sign:                                                                    | N/A                                                                                   |