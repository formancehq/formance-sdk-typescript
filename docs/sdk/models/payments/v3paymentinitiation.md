# V3PaymentInitiation

## Example Usage

```typescript
import { V3PaymentInitiation } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiation = {
  amount: 321409n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2025-11-23T00:31:39.339Z"),
  description: "tusk regarding spear newsletter bah gosh",
  id: "<id>",
  provider: "<value>",
  reference: "<value>",
  scheduledAt: new Date("2024-09-01T23:09:00.874Z"),
  status: "UNKNOWN",
  type: "PAYOUT",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                | *BigInt*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `connectorID`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `destinationAccountID`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `error`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `provider`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `reference`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `scheduledAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `sourceAccountID`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `status`                                                                                                | [payments.V3PaymentInitiationStatusEnum](../../../sdk/models/payments/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `type`                                                                                                  | [payments.V3PaymentInitiationTypeEnum](../../../sdk/models/payments/v3paymentinitiationtypeenum.md)     | :heavy_check_mark:                                                                                      | N/A                                                                                                     |