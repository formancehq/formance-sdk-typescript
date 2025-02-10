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
        amount: BigInt("467657"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-07-15T13:30:18.336Z"),
        description: "aw smoothly absentmindedly",
        id: "<id>",
        reference: "<value>",
        scheduledAt: new Date("2025-07-12T13:55:51.903Z"),
        status: V3PaymentInitiationStatusEnum.Failed,
        type: V3PaymentInitiationTypeEnum.Payout,
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