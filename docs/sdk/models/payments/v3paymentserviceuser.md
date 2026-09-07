# V3PaymentServiceUser

An end user on whose behalf payments and open banking connections are made

## Example Usage

```typescript
import { V3PaymentServiceUser } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentServiceUser = {
  createdAt: new Date("2026-09-30T03:09:54.430Z"),
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `address`                                                                                     | [payments.V3Address](../../../sdk/models/payments/v3address.md)                               | :heavy_minus_sign:                                                                            | A postal address                                                                              |
| `bankAccountIDs`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Bank accounts associated with the user                                                        |
| `contactDetails`                                                                              | [payments.V3ContactDetails](../../../sdk/models/payments/v3contactdetails.md)                 | :heavy_minus_sign:                                                                            | How to reach a payment service user                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the user was registered                                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the payment service user                                                 |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Full name of the payment service user                                                         |