# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletResponse = {
    data: {
        balances: {
            main: {
                assets: {
                    key: BigInt("262800"),
                },
            },
        },
        createdAt: new Date("2022-03-03T18:48:48.163Z"),
        id: "8f05e3d4-8fda-4f31-ba1f-5fd94259c0b3",
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