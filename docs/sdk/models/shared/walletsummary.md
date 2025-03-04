# WalletSummary

## Example Usage

```typescript
import { WalletSummary } from "@formance/formance-sdk/sdk/models/shared";

let value: WalletSummary = {
  availableFunds: {
    "key": BigInt("304714"),
  },
  balances: [
    {
      assets: {
        "key": BigInt("872564"),
      },
      name: "<value>",
    },
  ],
  expirableFunds: {
    "key": BigInt("62556"),
  },
  expiredFunds: {
    "key": BigInt("493467"),
  },
  holdFunds: {
    "key": BigInt("654684"),
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