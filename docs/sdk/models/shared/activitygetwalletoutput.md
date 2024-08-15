# ActivityGetWalletOutput

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetWalletOutput = {
    data: {
        balances: {
            main: {
                assets: {
                    key: BigInt("351870"),
                },
            },
        },
        createdAt: new Date("2022-09-18T13:33:39.335Z"),
        id: "b88f3a8d-8f5c-40b2-b2fb-7b194a276b26",
        ledger: "<value>",
        metadata: {
            key: "<value>",
        },
        name: "<value>",
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.WalletWithBalances](../../../sdk/models/shared/walletwithbalances.md) | :heavy_check_mark:                                                            | N/A                                                                           |