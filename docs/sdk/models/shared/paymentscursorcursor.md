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
          createdAt: new Date("2023-10-10T06:45:27.974Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.DisputeWon,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-04-23T08:13:17.626Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.A2a,
      sourceAccountID: "<value>",
      status: PaymentStatus.DisputeWon,
      type: PaymentType.Payout,
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