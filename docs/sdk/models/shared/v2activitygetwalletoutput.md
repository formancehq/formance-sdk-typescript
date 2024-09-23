# V2ActivityGetWalletOutput

## Example Usage

```typescript
import { V2ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("428378"),
        },
      },
    },
    createdAt: new Date("2024-10-08T18:46:29.615Z"),
    id: "1fe17bbe-c47b-4237-a4d9-5dcfd62d05ef",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.V2WalletWithBalances](../../../sdk/models/shared/v2walletwithbalances.md) | :heavy_check_mark:                                                                | N/A                                                                               |