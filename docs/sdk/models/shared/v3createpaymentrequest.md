# V3CreatePaymentRequest

## Example Usage

```typescript
import { V3CreatePaymentRequest, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreatePaymentRequest = {
  amount: BigInt("624011"),
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2024-06-28T02:05:44.031Z"),
  initialAmount: BigInt("773652"),
  reference: "<value>",
  scheme: "<value>",
  type: V3PaymentTypeEnum.Other,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                               | [shared.V3CreatePaymentAdjustmentRequest](../../../sdk/models/shared/v3createpaymentadjustmentrequest.md)[] | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `amount`                                                                                                    | *BigInt*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `asset`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `connectorID`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `destinationAccountID`                                                                                      | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `initialAmount`                                                                                             | *BigInt*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `metadata`                                                                                                  | Record<string, *string*>                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `reference`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `scheme`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `sourceAccountID`                                                                                           | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `type`                                                                                                      | [shared.V3PaymentTypeEnum](../../../sdk/models/shared/v3paymenttypeenum.md)                                 | :heavy_check_mark:                                                                                          | N/A                                                                                                         |