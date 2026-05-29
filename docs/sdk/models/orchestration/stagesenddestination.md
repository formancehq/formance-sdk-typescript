# StageSendDestination

## Example Usage

```typescript
import { StageSendDestination, StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendDestination = {
  stageSendDestinationPayment: {
    psp: "stripe",
    type: StageSendDestinationPaymentType.Payout,
  },
  stageSendSourceAccount: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `stageSendDestinationPayment`                                                                                 | [orchestration.StageSendDestinationPayment](../../../sdk/models/orchestration/stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `stageSendSourceAccount`                                                                                      | [orchestration.StageSendSourceAccount](../../../sdk/models/orchestration/stagesendsourceaccount.md)           | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `stageSendSourceWallet`                                                                                       | [orchestration.StageSendSourceWallet](../../../sdk/models/orchestration/stagesendsourcewallet.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |