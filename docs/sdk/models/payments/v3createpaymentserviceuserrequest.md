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
| `address`                                                                                   | [payments.V3AddressRequest](../../../sdk/models/payments/v3addressrequest.md)               | :heavy_minus_sign:                                                                          | A postal address to record on the payment service user                                      |
| `bankAccountIDs`                                                                            | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Bank accounts to associate with the user                                                    |
| `contactDetails`                                                                            | [payments.V3ContactDetailsRequest](../../../sdk/models/payments/v3contactdetailsrequest.md) | :heavy_minus_sign:                                                                          | How to reach the payment service user                                                       |
| `metadata`                                                                                  | Record<string, *string*>                                                                    | :heavy_minus_sign:                                                                          | Arbitrary key/value pairs attached to the resource                                          |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Full name of the payment service user                                                       |