# V3InitiatePaymentRequest

## Example Usage

```typescript
import { V3InitiatePaymentRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3InitiatePaymentRequest = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `v3InitiatePaymentRequest`                                                                                                        | [shared.V3InitiatePaymentRequest](../../../sdk/models/shared/v3initiatepaymentrequest.md)                                         | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `noValidation`                                                                                                                    | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | If set to true, the request will not have to be validated. This is useful if we want to directly forward the request to the PSP.<br/> |