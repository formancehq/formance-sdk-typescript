# V2ActivityCreditWallet

## Example Usage

```typescript
import { V2ActivityCreditWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityCreditWallet = {
  v2CreditWalletRequest: {
    v2Monetary: {
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
| `v2CreditWalletRequest`                                                                           | [orchestration.V2CreditWalletRequest](../../../sdk/models/orchestration/v2creditwalletrequest.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"sources": []<br/>} |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |