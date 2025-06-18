# OrchestrationCreditWalletRequest

## Example Usage

```typescript
import { OrchestrationCreditWalletRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationCreditWalletRequest = {
  amount: {
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
| `amount`                                                                                      | [shared.Monetary](../../../sdk/models/shared/monetary.md)                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The balance to credit                                                                         |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sources`                                                                                     | *shared.Subject*[]                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |