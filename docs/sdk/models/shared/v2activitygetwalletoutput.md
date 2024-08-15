# V2ActivityGetWalletOutput

## Example Usage

```typescript
import { V2ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetWalletOutput = {
    data: {
        balances: {
            main: {
                assets: {
                    key: BigInt("169025"),
                },
            },
        },
        createdAt: new Date("2024-12-15T11:41:08.386Z"),
        id: "de047717-78ff-461d-8174-76360a15db6a",
        ledger: "<value>",
        metadata: {
            key: "<value>",
        },
        name: "<value>",
    },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.V2WalletWithBalances](../../../sdk/models/shared/v2walletwithbalances.md) | :heavy_check_mark:                                                                | N/A                                                                               |