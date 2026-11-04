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

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                | [orchestration.Monetary](../../../sdk/models/orchestration/monetary.md)                                                                                 | :heavy_minus_sign:                                                                                                                                      | An amount together with the asset it is denominated in                                                                                                  |
| `destination`                                                                                                                                           | [orchestration.StageSendDestination](../../../sdk/models/orchestration/stagesenddestination.md)                                                         | :heavy_minus_sign:                                                                                                                                      | Where a send stage puts the funds                                                                                                                       |
| `metadata`                                                                                                                                              | Record<string, *string*>                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Metadata to attach to the resulting transaction                                                                                                         |
| `source`                                                                                                                                                | [orchestration.StageSendSource](../../../sdk/models/orchestration/stagesendsource.md)                                                                   | :heavy_minus_sign:                                                                                                                                      | Where a send stage takes the funds from                                                                                                                 |
| `timestamp`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The transaction time to record on the resulting transaction. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |