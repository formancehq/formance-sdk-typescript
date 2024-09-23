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
          createdAt: new Date("2024-11-21T13:13:18.078Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.Failed,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-10-16T08:01:27.253Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.Unionpay,
      sourceAccountID: "<value>",
      status: PaymentStatus.RefundedFailure,
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