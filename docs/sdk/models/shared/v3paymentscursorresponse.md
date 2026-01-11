# V3PaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentsCursorResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentsCursorResponse = {
  cursor: {
    data: [
      {
        amount: 68747n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-11-06T22:03:38.430Z"),
        id: "<id>",
        initialAmount: 121358n,
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: V3PaymentStatusEnum.Cancelled,
        type: V3PaymentTypeEnum.Other,
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [shared.V3PaymentsCursorResponseCursor](../../../sdk/models/shared/v3paymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |