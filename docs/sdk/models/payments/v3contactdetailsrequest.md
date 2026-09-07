# V3ContactDetailsRequest

How to reach the payment service user

## Example Usage

```typescript
import { V3ContactDetailsRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ContactDetailsRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `email`                                           | *string*                                          | :heavy_minus_sign:                                | Email address of the user                         |
| `phoneNumber`                                     | *string*                                          | :heavy_minus_sign:                                | Phone number of the user, in international format |