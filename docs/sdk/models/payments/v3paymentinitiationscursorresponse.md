# V3PaymentInitiationsCursorResponse

## Example Usage

```typescript
import {
  V3PaymentInitiationsCursorResponse,
  V3PaymentInitiationStatusEnum,
  V3PaymentInitiationTypeEnum,
} from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationsCursorResponse = {
  cursor: {
    data: [
      {
        v3PaymentInitiationStatusEnum: V3PaymentInitiationStatusEnum.Rejected,
        v3PaymentInitiationTypeEnum: V3PaymentInitiationTypeEnum.Unknown,
        amount: 24585n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-04-17T14:00:32.450Z"),
        description:
          "halt if stealthily dishearten determined diligently whose correctly of grouper",
        id: "<id>",
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2026-02-20T15:36:51.779Z"),
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                      | [payments.V3PaymentInitiationsCursorResponseCursor](../../../sdk/models/payments/v3paymentinitiationscursorresponsecursor.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |