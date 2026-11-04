# WalletWithBalancesBalances

Aggregated funds held by the wallet, keyed by asset

## Example Usage

```typescript
import { WalletWithBalancesBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WalletWithBalancesBalances = {
  main: {
    assets: {},
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `main`                                                                        | [orchestration.AssetHolder](../../../sdk/models/orchestration/assetholder.md) | :heavy_check_mark:                                                            | N/A                                                                           |