# StageSendSource

## Example Usage

```typescript
import { StageSendSource } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendSource = {
  stageSendSourceAccount: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `stageSendSourceAccount`                                                                            | [orchestration.StageSendSourceAccount](../../../sdk/models/orchestration/stagesendsourceaccount.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `stageSendSourcePayment`                                                                            | [orchestration.StageSendSourcePayment](../../../sdk/models/orchestration/stagesendsourcepayment.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `stageSendSourceWallet`                                                                             | [orchestration.StageSendSourceWallet](../../../sdk/models/orchestration/stagesendsourcewallet.md)   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |