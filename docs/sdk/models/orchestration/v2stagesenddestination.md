# V2StageSendDestination

## Example Usage

```typescript
import { V2StageSendDestination, V2StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2StageSendDestination = {
  account: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
  payment: {
    psp: "stripe",
    type: V2StageSendDestinationPaymentType.Payout,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                         | [orchestration.V2StageSendSourceAccount](../../../sdk/models/orchestration/v2stagesendsourceaccount.md)           | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `payment`                                                                                                         | [orchestration.V2StageSendDestinationPayment](../../../sdk/models/orchestration/v2stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `wallet`                                                                                                          | [orchestration.V2StageSendSourceWallet](../../../sdk/models/orchestration/v2stagesendsourcewallet.md)             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |