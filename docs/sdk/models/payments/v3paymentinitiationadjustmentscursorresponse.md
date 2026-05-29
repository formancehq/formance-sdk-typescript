# V3PaymentInitiationAdjustmentsCursorResponse

## Example Usage

```typescript
import { V3PaymentInitiationAdjustmentsCursorResponse, V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationAdjustmentsCursorResponse = {
  cursor: {
    data: [
      {
        v3PaymentInitiationStatusEnum:
          V3PaymentInitiationStatusEnum.ReverseFailed,
        createdAt: new Date("2025-09-25T12:25:58.466Z"),
        id: "<id>",
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

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                          | [payments.V3PaymentInitiationAdjustmentsCursorResponseCursor](../../../sdk/models/payments/v3paymentinitiationadjustmentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |