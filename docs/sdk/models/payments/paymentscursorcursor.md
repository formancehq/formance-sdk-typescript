# PaymentsCursorCursor

## Example Usage

```typescript
import { PaymentsCursorCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentsCursorCursor = {
  data: [
    {
      adjustments: [
        {
          amount: 100n,
          createdAt: new Date("2025-04-17T17:26:19.824Z"),
          raw: {
            "key": "<value>",
            "key1": "<value>",
          },
          reference: "<value>",
          status: "DISPUTE_WON",
        },
      ],
      amount: 100n,
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2024-07-13T23:49:47.992Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: 100n,
      metadata: null,
      raw: {
        "key": "<value>",
        "key1": "<value>",
      },
      reference: "<value>",
      scheme: "sepa credit",
      sourceAccountID: "<id>",
      status: "REFUNDED",
      type: "PAY-IN",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [payments.Payment](../../../sdk/models/payments/payment.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |