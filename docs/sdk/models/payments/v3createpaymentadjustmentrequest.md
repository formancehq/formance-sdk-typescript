# V3CreatePaymentAdjustmentRequest

## Example Usage

```typescript
import { V3CreatePaymentAdjustmentRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreatePaymentAdjustmentRequest = {
  createdAt: new Date("2024-07-01T23:19:27.307Z"),
  reference: "<value>",
  status: "DISPUTE_WON",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | Amount carried by this adjustment                                                             |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Asset the adjustment is denominated in                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the adjustment occurred at the provider                                                  |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the adjustment carries at the provider                                             |
| `status`                                                                                      | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |