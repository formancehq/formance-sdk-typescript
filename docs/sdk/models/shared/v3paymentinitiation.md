# V3PaymentInitiation

## Example Usage

```typescript
import { V3PaymentInitiation, V3PaymentInitiationStatusEnum, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiation = {
  amount: BigInt("241750"),
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2023-07-25T19:06:35.622Z"),
  description: "gladly since gee whoever beside prance",
  id: "<id>",
  provider: "<value>",
  reference: "<value>",
  scheduledAt: new Date("2024-07-08T05:45:55.648Z"),
  status: V3PaymentInitiationStatusEnum.Processing,
  type: V3PaymentInitiationTypeEnum.Unknown,
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
| `provider`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reference`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `scheduledAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceAccountID`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [shared.V3PaymentInitiationStatusEnum](../../../sdk/models/shared/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `type`                                                                                              | [shared.V3PaymentInitiationTypeEnum](../../../sdk/models/shared/v3paymentinitiationtypeenum.md)     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |