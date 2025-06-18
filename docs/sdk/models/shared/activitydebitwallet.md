# ActivityDebitWallet

## Example Usage

```typescript
import { ActivityDebitWallet } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityDebitWallet = {
  data: {
    amount: {
      amount: 100n,
      asset: "USD/2",
    },
    metadata: {
      "key": "",
    },
    pending: true,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.DebitWalletRequest](../../../sdk/models/shared/debitwalletrequest.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"pending": true<br/>} |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |