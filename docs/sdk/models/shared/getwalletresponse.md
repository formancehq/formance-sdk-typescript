# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletResponse = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("591220"),
        },
      },
    },
    createdAt: new Date("2024-03-12T11:55:33.792Z"),
    id: "d0c7ac82-61bf-4c69-a484-b4fa10f353ea",
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