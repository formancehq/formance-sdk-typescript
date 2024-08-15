# GetWalletSummaryResponse

## Example Usage

```typescript
import { GetWalletSummaryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletSummaryResponse = {
    availableFunds: {
        key: BigInt("412433"),
    },
    balances: [
        {
            assets: {
                key: BigInt("956124"),
            },
            name: "<value>",
        },
    ],
    expirableFunds: {
        key: BigInt("164319"),
    },
    expiredFunds: {
        key: BigInt("330440"),
    },
    holdFunds: {
        key: BigInt("893773"),
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `availableFunds`                                                              | Record<string, *BigInt*>                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `balances`                                                                    | [shared.BalanceWithAssets](../../../sdk/models/shared/balancewithassets.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |
| `expirableFunds`                                                              | Record<string, *BigInt*>                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `expiredFunds`                                                                | Record<string, *BigInt*>                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `holdFunds`                                                                   | Record<string, *BigInt*>                                                      | :heavy_check_mark:                                                            | N/A                                                                           |