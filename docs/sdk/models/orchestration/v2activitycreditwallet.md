# V2ActivityCreditWallet

Arguments for the activity that credits a wallet

## Example Usage

```typescript
import { V2ActivityCreditWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityCreditWallet = {
  data: {
    amount: {
      amount: 100n,
      asset: "USD/2",
    },
    metadata: {
      "key": "",
    },
    sources: [],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [orchestration.V2CreditWalletRequest](../../../sdk/models/orchestration/v2creditwalletrequest.md) | :heavy_minus_sign:                                                                                | A credit to apply to a wallet                                                                     | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"sources": []<br/>} |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Identifier of the wallet to credit                                                                |                                                                                                   |