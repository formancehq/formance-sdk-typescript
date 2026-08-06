# PaymentResponse

OK

## Example Usage

```typescript
import { PaymentResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentResponse = {
  data: {
    adjustments: [],
    amount: 100n,
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2026-07-08T02:46:08.631Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    metadata: {
      "key": "<value>",
    },
    raw: {
      "key": "<value>",
      "key1": "<value>",
    },
    reference: "<value>",
    scheme: "sepa debit",
    sourceAccountID: "<id>",
    status: "DISPUTE_WON",
    type: "TRANSFER",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [payments.Payment](../../../sdk/models/payments/payment.md) | :heavy_check_mark:                                          | N/A                                                         |