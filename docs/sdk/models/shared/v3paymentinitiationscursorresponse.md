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
        amount: BigInt("714977"),
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-04-08T09:48:40.874Z"),
        description: "who modulo oh nor unused",
        id: "<id>",
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2025-09-18T05:49:59.550Z"),
        status: V3PaymentInitiationStatusEnum.Processing,
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