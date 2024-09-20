# V2ActivityGetWalletOutput

## Example Usage

```typescript
import { V2ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("7468"),
        },
      },
    },
    createdAt: new Date("2023-12-03T02:48:10.719Z"),
    id: "e6b6bc9b-8f75-49ea-855a-9741d3113529",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.V2WalletWithBalances](../../../sdk/models/shared/v2walletwithbalances.md) | :heavy_check_mark:                                                                | N/A                                                                               |