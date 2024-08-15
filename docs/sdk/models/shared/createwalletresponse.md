# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletResponse = {
    data: {
        createdAt: new Date("2022-04-18T01:16:45.279Z"),
        id: "180f739a-e9e0-457e-b809-e2810331f398",
        ledger: "<value>",
        metadata: {
            key: "<value>",
        },
        name: "<value>",
    },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.Wallet](../../../sdk/models/shared/wallet.md) | :heavy_check_mark:                                    | N/A                                                   |