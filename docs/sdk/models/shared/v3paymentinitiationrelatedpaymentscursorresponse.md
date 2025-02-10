# V3PaymentInitiationRelatedPaymentsCursorResponse

## Example Usage

```typescript
import {
  V3PaymentInitiationRelatedPaymentsCursorResponse,
  V3PaymentStatusEnum,
  V3PaymentTypeEnum,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationRelatedPaymentsCursorResponse = {
  cursor: {
    data: [
      {
        amount: BigInt("765259"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-10-21T22:24:15.953Z"),
        id: "<id>",
        initialAmount: BigInt("636775"),
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: V3PaymentStatusEnum.Other,
        type: V3PaymentTypeEnum.Unknown,
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

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                              | [shared.V3PaymentInitiationRelatedPaymentsCursorResponseCursor](../../../sdk/models/shared/v3paymentinitiationrelatedpaymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |