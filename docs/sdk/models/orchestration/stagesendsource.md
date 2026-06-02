# StageSendSource

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
| `account`                                                                                           | [orchestration.StageSendSourceAccount](../../../sdk/models/orchestration/stagesendsourceaccount.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `payment`                                                                                           | [orchestration.StageSendSourcePayment](../../../sdk/models/orchestration/stagesendsourcepayment.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `wallet`                                                                                            | [orchestration.StageSendSourceWallet](../../../sdk/models/orchestration/stagesendsourcewallet.md)   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |