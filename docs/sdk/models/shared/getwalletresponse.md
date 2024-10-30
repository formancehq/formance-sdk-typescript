# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletResponse = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("496440"),
        },
      },
    },
    createdAt: new Date("2023-10-19T22:57:45.544Z"),
    id: "ae4d7acb-cace-4e5f-9097-3818d25a5657",
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