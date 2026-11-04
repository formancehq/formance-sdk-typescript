# WalletBalances

The wallet's main balance, keyed by asset

## Example Usage

```typescript
import { WalletBalances } from "@formance/formance-sdk/sdk/models/wallets";

let value: WalletBalances = {
  main: {
    assets: {
      "key": 390928n,
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `main`                                                            | [wallets.AssetHolder](../../../sdk/models/wallets/assetholder.md) | :heavy_check_mark:                                                | N/A                                                               |