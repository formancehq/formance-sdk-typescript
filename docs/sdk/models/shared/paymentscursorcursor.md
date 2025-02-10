# PaymentsCursorCursor

## Example Usage

```typescript
import { PaymentScheme, PaymentsCursorCursor, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsCursorCursor = {
  data: [
    {
      adjustments: [
        {
          amount: BigInt("100"),
          createdAt: new Date("2023-04-07T07:48:10.250Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.RefundedFailure,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2023-08-25T20:52:24.970Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.GooglePay,
      sourceAccountID: "<id>",
      status: PaymentStatus.Other,
      type: PaymentType.Other,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Payment](../../../sdk/models/shared/payment.md)[] | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `hasMore`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | N/A                                                       | false                                                     |
| `next`                                                    | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `pageSize`                                                | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       | 15                                                        |
| `previous`                                                | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=              |