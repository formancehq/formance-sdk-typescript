# V2StageSend

## Example Usage

```typescript
import { V2StageSend, V2StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2StageSend = {
  v2StageSendDestination: {
    v2StageSendDestinationPayment: {
      psp: "stripe",
      type: V2StageSendDestinationPaymentType.Payout,
    },
    v2StageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
  v2StageSendSource: {
    v2StageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `v2Monetary`                                                                                        | [orchestration.V2Monetary](../../../sdk/models/orchestration/v2monetary.md)                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `v2StageSendDestination`                                                                            | [orchestration.V2StageSendDestination](../../../sdk/models/orchestration/v2stagesenddestination.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `v2StageSendSource`                                                                                 | [orchestration.V2StageSendSource](../../../sdk/models/orchestration/v2stagesendsource.md)           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `timestamp`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |