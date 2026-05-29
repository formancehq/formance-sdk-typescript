# V3InitiatePaymentRequest

## Example Usage

```typescript
import { V3InitiatePaymentRequest, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3InitiatePaymentRequest = {
  v3PaymentInitiationTypeEnum: V3PaymentInitiationTypeEnum.Unknown,
  amount: 500560n,
  asset: "<value>",
  connectorID: "<value>",
  description:
    "corrupt defiantly by proud windy garage loyally transparency nicely quarrelsomely",
  reference: "<value>",
  scheduledAt: new Date("2026-11-01T04:40:19.842Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                        | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `v3PaymentInitiationTypeEnum`                                                                       | [payments.V3PaymentInitiationTypeEnum](../../../sdk/models/payments/v3paymentinitiationtypeenum.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `asset`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `destinationAccountID`                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `reference`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `scheduledAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sourceAccountID`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |