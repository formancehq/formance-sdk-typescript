# StageSendDestination

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
| `account`                                                                                                     | [orchestration.StageSendSourceAccount](../../../sdk/models/orchestration/stagesendsourceaccount.md)           | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `payment`                                                                                                     | [orchestration.StageSendDestinationPayment](../../../sdk/models/orchestration/stagesenddestinationpayment.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `wallet`                                                                                                      | [orchestration.StageSendSourceWallet](../../../sdk/models/orchestration/stagesendsourcewallet.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |