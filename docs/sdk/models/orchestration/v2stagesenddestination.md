# V2StageSendDestination

Where a send stage puts the funds

## Example Usage

```typescript
import { V2StageSendDestination } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2StageSendDestination = {
  account: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
  payment: {
    psp: "stripe",
    type: "PAYOUT",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                         | [orchestration.V2StageSendDestinationAccount](../../../sdk/models/orchestration/v2stagesenddestinationaccount.md) | :heavy_minus_sign:                                                                                                | Send the funds to a ledger account                                                                                |
| `payment`                                                                                                         | [orchestration.V2StageSendDestinationPayment](../../../sdk/models/orchestration/v2stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                                | Send the funds to a payment                                                                                       |
| `wallet`                                                                                                          | [orchestration.V2StageSendDestinationWallet](../../../sdk/models/orchestration/v2stagesenddestinationwallet.md)   | :heavy_minus_sign:                                                                                                | Send the funds to a wallet                                                                                        |