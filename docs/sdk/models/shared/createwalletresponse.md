# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletResponse = {
  data: {
    createdAt: new Date("2023-08-05T11:41:51.964Z"),
    id: "8ab28638-483e-4591-8a4f-693dc3e0c7d7",
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