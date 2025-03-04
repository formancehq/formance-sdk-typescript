# GetWalletSummaryResponse

## Example Usage

```typescript
import { GetWalletSummaryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletSummaryResponse = {
  data: {
    availableFunds: {
      "key": BigInt("91613"),
    },
    balances: [
      {
        assets: {
          "key": BigInt("271782"),
        },
        name: "<value>",
      },
    ],
    expirableFunds: {
      "key": BigInt("346394"),
    },
    expiredFunds: {
      "key": BigInt("853503"),
    },
    holdFunds: {
      "key": BigInt("766412"),
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.WalletSummary](../../../sdk/models/shared/walletsummary.md) | :heavy_check_mark:                                                  | N/A                                                                 |