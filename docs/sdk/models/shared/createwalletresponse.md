# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletResponse = {
  data: {
    createdAt: new Date("2022-06-19T23:57:47.817Z"),
    id: "9bf462ed-c083-41c3-b883-700e6e764149",
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