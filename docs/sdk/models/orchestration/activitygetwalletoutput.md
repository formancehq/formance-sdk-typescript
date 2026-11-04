# ActivityGetWalletOutput

Result of the activity that reads a wallet

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {},
      },
    },
    createdAt: new Date("2024-10-19T08:55:30.202Z"),
    id: "b04d34af-0989-4d42-95c6-a4b6139b911c",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [orchestration.WalletWithBalances](../../../sdk/models/orchestration/walletwithbalances.md) | :heavy_check_mark:                                                                          | A wallet together with the funds it currently holds                                         |