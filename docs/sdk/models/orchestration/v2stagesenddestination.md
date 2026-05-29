# V2StageSendDestination

## Example Usage

```typescript
import { V2StageSendDestination, V2StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2StageSendDestination = {
  v2StageSendDestinationPayment: {
    psp: "stripe",
    type: V2StageSendDestinationPaymentType.Payout,
  },
  v2StageSendSourceAccount: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `v2StageSendDestinationPayment`                                                                                   | [orchestration.V2StageSendDestinationPayment](../../../sdk/models/orchestration/v2stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `v2StageSendSourceAccount`                                                                                        | [orchestration.V2StageSendSourceAccount](../../../sdk/models/orchestration/v2stagesendsourceaccount.md)           | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `v2StageSendSourceWallet`                                                                                         | [orchestration.V2StageSendSourceWallet](../../../sdk/models/orchestration/v2stagesendsourcewallet.md)             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |