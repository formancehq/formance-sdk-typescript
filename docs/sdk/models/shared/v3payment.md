# V3Payment

## Example Usage

```typescript
import { V3Payment, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3Payment = {
  amount: 873532n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2026-02-16T03:38:40.724Z"),
  id: "<id>",
  initialAmount: 624960n,
  provider: "<value>",
  reference: "<value>",
  scheme: "<value>",
  status: V3PaymentStatusEnum.Capture,
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