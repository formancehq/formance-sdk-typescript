# V2ActivityDebitWallet

Arguments for the activity that debits a wallet

## Example Usage

```typescript
import { V2ActivityDebitWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityDebitWallet = {
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [orchestration.V2DebitWalletRequest](../../../sdk/models/orchestration/v2debitwalletrequest.md) | :heavy_minus_sign:                                                                              | A debit to apply to a wallet                                                                    | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"pending": true<br/>} |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Identifier of the wallet to debit                                                               |                                                                                                 |