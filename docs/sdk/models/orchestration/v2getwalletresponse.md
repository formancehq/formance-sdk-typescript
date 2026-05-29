# V2GetWalletResponse

## Example Usage

```typescript
import { V2GetWalletResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2GetWalletResponse = {
  v2WalletWithBalances: {
    balances: {
      v2AssetHolder: {
        assets: {},
      },
    },
    createdAt: new Date("2026-01-15T15:24:05.999Z"),
    id: "4ff2c6ff-7fe1-410b-b4f7-dadb460ccc69",
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `v2WalletWithBalances`                                                                          | [orchestration.V2WalletWithBalances](../../../sdk/models/orchestration/v2walletwithbalances.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |