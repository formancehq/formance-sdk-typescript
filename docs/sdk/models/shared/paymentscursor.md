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
            createdAt: new Date("2022-04-18T16:21:56.604Z"),
            raw: {},
            reference: "<value>",
            status: PaymentStatus.Expired,
          },
        ],
        amount: BigInt("100"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2024-09-05T07:59:50.566Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {
          "key": "<value>",
        },
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.Visa,
        sourceAccountID: "<value>",
        status: PaymentStatus.Succeeded,
        type: PaymentType.Transfer,
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