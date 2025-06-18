# WalletSummary

## Example Usage

```typescript
import { WalletSummary } from "@formance/formance-sdk/sdk/models/shared";

let value: WalletSummary = {
  availableFunds: {
    "key": 12015n,
    "key1": 827997n,
    "key2": 276430n,
  },
  balances: [
    {
      assets: {
        "key": 994406n,
      },
      name: "<value>",
    },
  ],
  expirableFunds: {
    "key": 851621n,
    "key1": 443166n,
  },
  expiredFunds: {
    "key": 608370n,
    "key1": 91511n,
  },
  holdFunds: {
    "key": 108015n,
    "key1": 971947n,
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