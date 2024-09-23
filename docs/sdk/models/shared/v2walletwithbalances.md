# V2WalletWithBalances

## Example Usage

```typescript
import { V2WalletWithBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WalletWithBalances = {
  balances: {
    main: {
      assets: {
        "key": BigInt("989089"),
      },
    },
  },
  createdAt: new Date("2023-12-28T11:46:36.523Z"),
  id: "dc4e0047-a1ac-4268-b7cf-c1c13238a7f3",
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