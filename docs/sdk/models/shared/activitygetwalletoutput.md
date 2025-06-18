# ActivityGetWalletOutput

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {},
      },
    },
    createdAt: new Date("2023-10-20T08:55:30.202Z"),
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

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.WalletWithBalances](../../../sdk/models/shared/walletwithbalances.md) | :heavy_check_mark:                                                            | N/A                                                                           |