# V3PaymentInitiationsCursorResponse

## Example Usage

```typescript
import {
  V3PaymentInitiationsCursorResponse,
  V3PaymentInitiationStatusEnum,
  V3PaymentInitiationTypeEnum,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationsCursorResponse = {
  cursor: {
    data: [
      {
        amount: 625271n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-05-18T16:35:49.970Z"),
        description: "damaged futon tuba",
        id: "<id>",
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2024-07-28T07:43:00.321Z"),
        status: V3PaymentInitiationStatusEnum.ReverseProcessing,
        type: V3PaymentInitiationTypeEnum.Unknown,
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

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                  | [shared.V3PaymentInitiationsCursorResponseCursor](../../../sdk/models/shared/v3paymentinitiationscursorresponsecursor.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |