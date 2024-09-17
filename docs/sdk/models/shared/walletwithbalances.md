# WalletWithBalances

## Example Usage

```typescript
import { WalletWithBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: WalletWithBalances = {
  balances: {
    main: {
      assets: {
        "key": BigInt("385237"),
      },
    },
  },
  createdAt: new Date("2022-03-05T23:00:19.753Z"),
  id: "eb1ea426-555b-4a3c-a874-4ed53b88f3a8",
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
| `balances`                                                                                    | [shared.WalletWithBalancesBalances](../../../sdk/models/shared/walletwithbalancesbalances.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the wallet.                                                                  |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |