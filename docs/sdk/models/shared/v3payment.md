# V3Payment

## Example Usage

```typescript
import { V3Payment, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3Payment = {
  amount: BigInt("155108"),
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2024-09-30T01:51:05.989Z"),
  id: "<id>",
  initialAmount: BigInt("730247"),
  provider: "<value>",
  reference: "<value>",
  scheme: "<value>",
  status: V3PaymentStatusEnum.Other,
  type: V3PaymentTypeEnum.PayIn,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [shared.V3PaymentAdjustment](../../../sdk/models/shared/v3paymentadjustment.md)[]             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheme`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.V3PaymentStatusEnum](../../../sdk/models/shared/v3paymentstatusenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.V3PaymentTypeEnum](../../../sdk/models/shared/v3paymenttypeenum.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |