# V3PaymentInitiation

## Example Usage

```typescript
import { V3PaymentInitiation, V3PaymentInitiationStatusEnum, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiation = {
  amount: BigInt("18901"),
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2025-03-20T09:23:48.962Z"),
  description: "even pish reapply vivid",
  id: "<id>",
  reference: "<value>",
  scheduledAt: new Date("2025-07-05T23:17:22.567Z"),
  status: V3PaymentInitiationStatusEnum.Unknown,
  type: V3PaymentInitiationTypeEnum.Transfer,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `asset`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `destinationAccountID`                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `reference`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `scheduledAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceAccountID`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [shared.V3PaymentInitiationStatusEnum](../../../sdk/models/shared/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `type`                                                                                              | [shared.V3PaymentInitiationTypeEnum](../../../sdk/models/shared/v3paymentinitiationtypeenum.md)     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |