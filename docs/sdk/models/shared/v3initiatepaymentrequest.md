# V3InitiatePaymentRequest

## Example Usage

```typescript
import { V3InitiatePaymentRequest, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3InitiatePaymentRequest = {
  amount: BigInt("624300"),
  asset: "<value>",
  connectorID: "<value>",
  description:
    "furthermore knickers deed rewrite carefully seriously defensive stock lucky diversity",
  reference: "<value>",
  scheduledAt: new Date("2023-11-21T08:44:57.483Z"),
  type: V3PaymentInitiationTypeEnum.Transfer,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `amount`                                                                                        | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `asset`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `destinationAccountID`                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `metadata`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `reference`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `scheduledAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `sourceAccountID`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `type`                                                                                          | [shared.V3PaymentInitiationTypeEnum](../../../sdk/models/shared/v3paymentinitiationtypeenum.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |