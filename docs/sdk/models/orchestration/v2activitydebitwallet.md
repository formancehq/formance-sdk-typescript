# V2ActivityDebitWallet

## Example Usage

```typescript
import { V2ActivityDebitWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityDebitWallet = {
  v2DebitWalletRequest: {
    v2Monetary: {
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
| `v2DebitWalletRequest`                                                                          | [orchestration.V2DebitWalletRequest](../../../sdk/models/orchestration/v2debitwalletrequest.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"pending": true<br/>} |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |