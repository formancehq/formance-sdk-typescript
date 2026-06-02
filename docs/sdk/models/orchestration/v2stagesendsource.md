# V2StageSendSource

## Example Usage

```typescript
import { V2StageSendSource } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2StageSendSource = {
  account: {
    allowOverdraft: true,
    id: "<id>",
    throughAccount: "liabilities:payouts-pending",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `account`                                                                                               | [orchestration.V2StageSendSourceAccount](../../../sdk/models/orchestration/v2stagesendsourceaccount.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `payment`                                                                                               | [orchestration.V2StageSendSourcePayment](../../../sdk/models/orchestration/v2stagesendsourcepayment.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `wallet`                                                                                                | [orchestration.V2StageSendSourceWallet](../../../sdk/models/orchestration/v2stagesendsourcewallet.md)   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |