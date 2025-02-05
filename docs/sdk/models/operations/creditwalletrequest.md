# CreditWalletRequest

## Example Usage

```typescript
import { CreditWalletRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreditWalletRequest = {
  creditWalletRequest: {
    amount: {
      amount: BigInt("100"),
      asset: "USD/2",
    },
    metadata: {
      "key": "",
    },
    sources: [],
  },
  id: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `creditWalletRequest`                                                                       | [shared.CreditWalletRequest](../../../sdk/models/shared/creditwalletrequest.md)             | :heavy_minus_sign:                                                                          | N/A                                                                                         | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"sources": []<br/>} |
| `idempotencyKey`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | Use an idempotency key                                                                      |                                                                                             |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |