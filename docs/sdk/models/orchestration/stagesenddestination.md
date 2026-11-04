# StageSendDestination

Where a send stage puts the funds

## Example Usage

```typescript
import { StageSendDestination } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendDestination = {
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                     | [orchestration.StageSendDestinationAccount](../../../sdk/models/orchestration/stagesenddestinationaccount.md) | :heavy_minus_sign:                                                                                            | Send the funds to a ledger account                                                                            |
| `payment`                                                                                                     | [orchestration.StageSendDestinationPayment](../../../sdk/models/orchestration/stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                            | Send the funds to a payment                                                                                   |
| `wallet`                                                                                                      | [orchestration.StageSendDestinationWallet](../../../sdk/models/orchestration/stagesenddestinationwallet.md)   | :heavy_minus_sign:                                                                                            | Send the funds to a wallet                                                                                    |