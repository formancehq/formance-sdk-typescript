# CreateSecretResponse

## Example Usage

```typescript
import { CreateSecretResponse } from "@formance/formance-sdk/sdk/models/auth";

let value: CreateSecretResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [auth.Secret](../../../sdk/models/auth/secret.md)                                          | :heavy_minus_sign:                                                                         | A client secret. The full value is returned only at creation and cannot be retrieved again |