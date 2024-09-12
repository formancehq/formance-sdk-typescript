# V2ActivityCreditWallet

## Example Usage

```typescript
import { V2ActivityCreditWallet } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityCreditWallet = {
  data: {
    amount: {
      amount: BigInt("100"),
      asset: "USD/2",
    },
    metadata: {
      "key": "",
    },
    sources: [
      {
        identifier: "<value>",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [shared.V2CreditWalletRequest](../../../sdk/models/shared/v2creditwalletrequest.md)         | :heavy_minus_sign:                                                                          | N/A                                                                                         | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"sources": []<br/>} |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |