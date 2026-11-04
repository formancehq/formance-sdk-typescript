# V2WalletWithBalancesBalances

Aggregated funds held by the wallet, keyed by asset

## Example Usage

```typescript
import { V2WalletWithBalancesBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WalletWithBalancesBalances = {
  main: {
    assets: {
      "key": 657071n,
      "key1": 59154n,
      "key2": 638674n,
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `main`                                                                            | [orchestration.V2AssetHolder](../../../sdk/models/orchestration/v2assetholder.md) | :heavy_check_mark:                                                                | N/A                                                                               |