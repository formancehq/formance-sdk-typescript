# PaymentsCursorCursor

Paginated cursor wrapping the list of payments

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
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | Whether further pages are available                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Cursor for the next page, absent on the last page             |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | Number of items requested per page                            | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | Cursor for the previous page, absent on the first page        | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |