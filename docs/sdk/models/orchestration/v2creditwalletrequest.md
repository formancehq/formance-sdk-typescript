# V2CreditWalletRequest

## Example Usage

```typescript
import { V2CreditWalletRequest } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2CreditWalletRequest = {
  v2Monetary: {
    amount: 100n,
    asset: "USD/2",
  },
  metadata: {
    "key": "",
  },
  sources: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v2Monetary`                                                                                  | [orchestration.V2Monetary](../../../sdk/models/orchestration/v2monetary.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The balance to credit                                                                         |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sources`                                                                                     | *orchestration.V2Subject*[]                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |