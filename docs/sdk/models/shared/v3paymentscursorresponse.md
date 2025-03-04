# V3PaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentsCursorResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentsCursorResponse = {
  cursor: {
    data: [
      {
        amount: BigInt("65954"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-08-29T20:53:49.925Z"),
        id: "<id>",
        initialAmount: BigInt("854466"),
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: V3PaymentStatusEnum.Succeeded,
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