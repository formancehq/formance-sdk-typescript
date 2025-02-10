# V3PaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentsCursorResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentsCursorResponse = {
  cursor: {
    data: [
      {
        amount: BigInt("130205"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-08-20T18:12:26.248Z"),
        id: "<id>",
        initialAmount: BigInt("81671"),
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: V3PaymentStatusEnum.RefundedFailure,
        type: V3PaymentTypeEnum.PayIn,
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