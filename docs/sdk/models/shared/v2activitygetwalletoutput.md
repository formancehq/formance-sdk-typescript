# V2ActivityGetWalletOutput

## Example Usage

```typescript
import { V2ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("176281"),
        },
      },
    },
    createdAt: new Date("2023-11-03T12:40:15.931Z"),
    id: "977de7ac-84a9-4e0e-a805-b7f65d8aca61",
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