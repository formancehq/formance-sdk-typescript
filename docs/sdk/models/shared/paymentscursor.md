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
            createdAt: new Date("2022-07-13T04:54:44.144Z"),
            raw: {},
            reference: "<value>",
            status: PaymentStatus.Failed,
          },
        ],
        amount: BigInt("100"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2023-09-30T12:30:23.739Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {
          "key": "<value>",
        },
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.Cup,
        sourceAccountID: "<value>",
        status: PaymentStatus.Expired,
        type: PaymentType.Other,
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