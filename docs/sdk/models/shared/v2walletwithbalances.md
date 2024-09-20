# V2WalletWithBalances

## Example Usage

```typescript
import { V2WalletWithBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WalletWithBalances = {
  balances: {
    main: {
      assets: {
        "key": BigInt("367626"),
      },
    },
  },
  createdAt: new Date("2024-03-27T18:36:27.983Z"),
  id: "b8a72026-1143-45e1-b9db-c2259b1abda8",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balances`                                                                                    | [shared.Balances](../../../sdk/models/shared/balances.md)                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the wallet.                                                                  |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |