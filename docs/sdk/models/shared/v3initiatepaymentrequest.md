# V3InitiatePaymentRequest

## Example Usage

```typescript
import { V3InitiatePaymentRequest, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3InitiatePaymentRequest = {
  amount: 51037n,
  asset: "<value>",
  connectorID: "<value>",
  description:
    "worriedly camouflage impossible inside unimportant instead hornet",
  reference: "<value>",
  scheduledAt: new Date("2024-05-26T13:28:26.343Z"),
  type: V3PaymentInitiationTypeEnum.Unknown,
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