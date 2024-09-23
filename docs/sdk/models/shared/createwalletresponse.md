# CreateWalletResponse

## Example Usage

```typescript
import { CreateWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletResponse = {
  data: {
    createdAt: new Date("2024-02-18T17:07:55.792Z"),
    id: "873b1fd8-648e-4483-953f-9b15e12a9de2",
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