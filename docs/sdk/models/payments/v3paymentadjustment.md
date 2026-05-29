# V3PaymentAdjustment

## Example Usage

```typescript
import { V3PaymentAdjustment, V3PaymentStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentAdjustment = {
  v3PaymentStatusEnum: V3PaymentStatusEnum.Dispute,
  createdAt: new Date("2025-02-26T16:01:25.039Z"),
  id: "<id>",
  raw: {},
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3PaymentStatusEnum`                                                                         | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | [payments.V3PaymentAdjustmentRaw](../../../sdk/models/payments/v3paymentadjustmentraw.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |