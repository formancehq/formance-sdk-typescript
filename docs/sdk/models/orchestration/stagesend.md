# StageSend

## Example Usage

```typescript
import { StageSend } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSend = {
  destination: {
    account: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
    payment: {
      psp: "stripe",
      type: "PAYOUT",
    },
  },
  source: {
    account: {
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
| `amount`                                                                                        | [orchestration.Monetary](../../../sdk/models/orchestration/monetary.md)                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `destination`                                                                                   | [orchestration.StageSendDestination](../../../sdk/models/orchestration/stagesenddestination.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `metadata`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `source`                                                                                        | [orchestration.StageSendSource](../../../sdk/models/orchestration/stagesendsource.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `timestamp`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |