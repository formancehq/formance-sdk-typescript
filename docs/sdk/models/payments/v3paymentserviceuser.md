# V3PaymentServiceUser

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
| `v3Address`                                                                                   | [payments.V3Address](../../../sdk/models/payments/v3address.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3ContactDetails`                                                                            | [payments.V3ContactDetails](../../../sdk/models/payments/v3contactdetails.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `bankAccountIDs`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |