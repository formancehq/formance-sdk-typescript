# V3PaymentAdjustment

## Example Usage

```typescript
import { V3PaymentAdjustment, V3PaymentStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentAdjustment = {
  createdAt: new Date("2024-11-23T10:03:44.314Z"),
  id: "<id>",
  raw: {},
  reference: "<value>",
  status: V3PaymentStatusEnum.Refunded,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | [shared.V3PaymentAdjustmentRaw](../../../sdk/models/shared/v3paymentadjustmentraw.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.V3PaymentStatusEnum](../../../sdk/models/shared/v3paymentstatusenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |