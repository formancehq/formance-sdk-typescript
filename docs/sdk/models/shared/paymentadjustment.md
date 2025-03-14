# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment, PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentAdjustment = {
  amount: BigInt("100"),
  createdAt: new Date("2024-05-20T22:57:42.336Z"),
  raw: {},
  reference: "<value>",
  status: PaymentStatus.Expired,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `raw`                                                                                         | [shared.PaymentAdjustmentRaw](../../../sdk/models/shared/paymentadjustmentraw.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |