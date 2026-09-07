# V3PaymentAdjustment

## Example Usage

```typescript
import { V3PaymentAdjustment } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentAdjustment = {
  createdAt: new Date("2025-08-08T08:33:25.241Z"),
  id: "<id>",
  raw: {
    "key": "<value>",
  },
  reference: "<value>",
  status: "REFUNDED_FAILURE",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | Amount carried by this adjustment                                                             |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Asset the adjustment is denominated in                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the adjustment occurred at the provider                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the adjustment                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The provider's original payload for this adjustment                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the adjustment carries at the provider                                             |
| `status`                                                                                      | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |