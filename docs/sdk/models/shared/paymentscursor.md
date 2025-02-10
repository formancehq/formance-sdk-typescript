# PaymentsCursor

OK

## Example Usage

```typescript
import { PaymentScheme, PaymentsCursor, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentsCursor = {
  cursor: {
    data: [
      {
        adjustments: [
          {
            amount: BigInt("100"),
            createdAt: new Date("2023-09-30T06:42:46.491Z"),
            raw: {},
            reference: "<value>",
            status: PaymentStatus.Pending,
          },
        ],
        amount: BigInt("100"),
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2025-11-07T09:51:45.663Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {
          "key": "<value>",
        },
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.Rtp,
        sourceAccountID: "<id>",
        status: PaymentStatus.Expired,
        type: PaymentType.Payout,
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `cursor`                                                                          | [shared.PaymentsCursorCursor](../../../sdk/models/shared/paymentscursorcursor.md) | :heavy_check_mark:                                                                | N/A                                                                               |