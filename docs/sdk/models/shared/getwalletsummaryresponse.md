# GetWalletSummaryResponse

## Example Usage

```typescript
import { GetWalletSummaryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletSummaryResponse = {
  data: {
    availableFunds: {
      "key": 786190n,
      "key1": 711683n,
      "key2": 118158n,
    },
    balances: [
      {
        assets: {
          "key": 994406n,
        },
        name: "<value>",
      },
    ],
    expirableFunds: {},
    expiredFunds: {
      "key": 30277n,
      "key1": 755575n,
      "key2": 893399n,
    },
    holdFunds: {
      "key": 83031n,
      "key1": 197045n,
      "key2": 907403n,
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.WalletSummary](../../../sdk/models/shared/walletsummary.md) | :heavy_check_mark:                                                  | N/A                                                                 |