# GetWalletSummaryResponse

## Example Usage

```typescript
import { GetWalletSummaryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletSummaryResponse = {
  availableFunds: {
    "key": BigInt("557651"),
  },
  balances: [
    {
      assets: {
        "key": BigInt("317873"),
      },
      name: "<value>",
    },
  ],
  expirableFunds: {
    "key": BigInt("614175"),
  },
  expiredFunds: {
    "key": BigInt("419600"),
  },
  holdFunds: {
    "key": BigInt("199228"),
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