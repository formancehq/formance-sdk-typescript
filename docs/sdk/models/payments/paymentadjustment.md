# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentAdjustment = {
  amount: 100n,
  createdAt: new Date("2026-05-23T00:48:57.663Z"),
  raw: {},
  reference: "<value>",
  status: "PENDING",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount carried by this adjustment                                                             | 100                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the adjustment occurred at the provider                                                  |                                                                                               |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The provider's original payload for this adjustment                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the adjustment carries at the provider                                             |                                                                                               |
| `status`                                                                                      | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |                                                                                               |