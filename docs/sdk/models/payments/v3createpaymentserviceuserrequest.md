# V3CreatePaymentServiceUserRequest

## Example Usage

```typescript
import { V3CreatePaymentServiceUserRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreatePaymentServiceUserRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `v3AddressRequest`                                                                          | [payments.V3AddressRequest](../../../sdk/models/payments/v3addressrequest.md)               | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `v3ContactDetailsRequest`                                                                   | [payments.V3ContactDetailsRequest](../../../sdk/models/payments/v3contactdetailsrequest.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `v3Metadata`                                                                                | Record<string, *string*>                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `bankAccountIDs`                                                                            | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |