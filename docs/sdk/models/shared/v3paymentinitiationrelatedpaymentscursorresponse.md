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
        amount: BigInt("565242"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-11-14T13:37:18.232Z"),
        id: "<id>",
        initialAmount: BigInt("962575"),
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: V3PaymentStatusEnum.Cancelled,
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

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                              | [shared.V3PaymentInitiationRelatedPaymentsCursorResponseCursor](../../../sdk/models/shared/v3paymentinitiationrelatedpaymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |