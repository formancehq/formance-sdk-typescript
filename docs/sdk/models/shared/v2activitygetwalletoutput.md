# V2ActivityGetWalletOutput

## Example Usage

```typescript
import { V2ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": 657071n,
          "key1": 59154n,
          "key2": 638674n,
        },
      },
    },
    createdAt: new Date("2025-09-17T19:35:27.644Z"),
    id: "ab7169ae-35e6-4072-bd30-2fb25d22938c",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.V2WalletWithBalances](../../../sdk/models/shared/v2walletwithbalances.md) | :heavy_check_mark:                                                                | N/A                                                                               |