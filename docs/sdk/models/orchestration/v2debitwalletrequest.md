# V2DebitWalletRequest

## Example Usage

```typescript
import { V2DebitWalletRequest } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2DebitWalletRequest = {
  v2Monetary: {
    amount: 100n,
    asset: "USD/2",
  },
  metadata: {
    "key": "",
  },
  pending: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v2Monetary`                                                                                  | [orchestration.V2Monetary](../../../sdk/models/orchestration/v2monetary.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v2Subject`                                                                                   | *orchestration.V2Subject*                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `balances`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `pending`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Set to true to create a pending hold. If false, the wallet will be debited immediately.       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | cannot be used in conjunction with `pending` property                                         |