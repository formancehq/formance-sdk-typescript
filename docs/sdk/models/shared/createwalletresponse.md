# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletResponse = {
  data: {
    createdAt: new Date("2023-10-25T23:44:54.463Z"),
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

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.Wallet](../../../sdk/models/shared/wallet.md) | :heavy_check_mark:                                    | N/A                                                   |