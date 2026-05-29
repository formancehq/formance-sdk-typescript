# V3PaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentsCursorResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentsCursorResponse = {
  cursor: {
    data: [
      {
        v3PaymentStatusEnum: V3PaymentStatusEnum.Pending,
        v3PaymentTypeEnum: V3PaymentTypeEnum.Transfer,
        amount: 121358n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-09-05T03:45:38.027Z"),
        id: "<id>",
        initialAmount: 915345n,
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [payments.V3PaymentsCursorResponseCursor](../../../sdk/models/payments/v3paymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |