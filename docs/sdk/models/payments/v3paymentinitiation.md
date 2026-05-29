# V3PaymentInitiation

## Example Usage

```typescript
import { V3PaymentInitiation, V3PaymentInitiationStatusEnum, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiation = {
  v3PaymentInitiationStatusEnum: V3PaymentInitiationStatusEnum.Processing,
  v3PaymentInitiationTypeEnum: V3PaymentInitiationTypeEnum.Transfer,
  amount: 455712n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2025-08-24T05:35:22.077Z"),
  description:
    "amazing glaring pfft emulsify reclassify carelessly than within when",
  id: "<id>",
  provider: "<value>",
  reference: "<value>",
  scheduledAt: new Date("2024-04-30T14:35:05.760Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                            | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `v3PaymentInitiationStatusEnum`                                                                         | [payments.V3PaymentInitiationStatusEnum](../../../sdk/models/payments/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `v3PaymentInitiationTypeEnum`                                                                           | [payments.V3PaymentInitiationTypeEnum](../../../sdk/models/payments/v3paymentinitiationtypeenum.md)     | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `amount`                                                                                                | *BigInt*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `connectorID`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `destinationAccountID`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `error`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `provider`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `reference`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `scheduledAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `sourceAccountID`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |