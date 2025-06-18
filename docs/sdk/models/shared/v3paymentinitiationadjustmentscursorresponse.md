# V3PaymentInitiationAdjustmentsCursorResponse

## Example Usage

```typescript
import { V3PaymentInitiationAdjustmentsCursorResponse, V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationAdjustmentsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-06-07T01:49:10.843Z"),
        id: "<id>",
        status: V3PaymentInitiationStatusEnum.Failed,
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                      | [shared.V3PaymentInitiationAdjustmentsCursorResponseCursor](../../../sdk/models/shared/v3paymentinitiationadjustmentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |