# StageSendSource

Where a send stage takes the funds from

## Example Usage

```typescript
import { StageSendSource } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendSource = {
  account: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `account`                                                                                           | [orchestration.StageSendSourceAccount](../../../sdk/models/orchestration/stagesendsourceaccount.md) | :heavy_minus_sign:                                                                                  | Take the funds from a ledger account                                                                |
| `payment`                                                                                           | [orchestration.StageSendSourcePayment](../../../sdk/models/orchestration/stagesendsourcepayment.md) | :heavy_minus_sign:                                                                                  | Take the funds from a payment                                                                       |
| `wallet`                                                                                            | [orchestration.StageSendSourceWallet](../../../sdk/models/orchestration/stagesendsourcewallet.md)   | :heavy_minus_sign:                                                                                  | Take the funds from a wallet                                                                        |