# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/wallets";

let value: CreateWalletResponse = {
  wallet: {
    createdAt: new Date("2024-10-24T23:44:54.463Z"),
    id: "df033a16-3aef-4403-a376-a2bf12addd99",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `wallet`                                                | [wallets.Wallet](../../../sdk/models/wallets/wallet.md) | :heavy_check_mark:                                      | N/A                                                     |