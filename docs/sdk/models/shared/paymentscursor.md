# PaymentsCursor

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
            createdAt: new Date("2024-10-09T02:34:28.472Z"),
            raw: {},
            reference: "<value>",
            status: PaymentStatus.Cancelled,
          },
        ],
        amount: BigInt("100"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2022-11-24T20:56:15.213Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {
          "key": "<value>",
        },
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.SepaDebit,
        sourceAccountID: "<value>",
        status: PaymentStatus.Expired,
        type: PaymentType.PayIn,
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