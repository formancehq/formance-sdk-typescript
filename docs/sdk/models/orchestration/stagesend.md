# StageSend

## Example Usage

```typescript
import { StageSend, StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSend = {
  stageSendDestination: {
    stageSendDestinationPayment: {
      psp: "stripe",
      type: StageSendDestinationPaymentType.Payout,
    },
    stageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
  stageSendSource: {
    stageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `monetary`                                                                                      | [orchestration.Monetary](../../../sdk/models/orchestration/monetary.md)                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `stageSendDestination`                                                                          | [orchestration.StageSendDestination](../../../sdk/models/orchestration/stagesenddestination.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `stageSendSource`                                                                               | [orchestration.StageSendSource](../../../sdk/models/orchestration/stagesendsource.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `metadata`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `timestamp`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |