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
            createdAt: new Date("2024-04-28T03:27:09.943Z"),
            raw: {},
            reference: "<value>",
            status: PaymentStatus.Failed,
          },
        ],
        amount: BigInt("100"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2024-09-23T03:05:19.693Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {
          "key": "<value>",
        },
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.Jcb,
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