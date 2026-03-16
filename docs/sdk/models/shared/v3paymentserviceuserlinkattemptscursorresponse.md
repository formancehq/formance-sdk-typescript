# V3PaymentServiceUserLinkAttemptsCursorResponse

## Example Usage

```typescript
import {
  V3OpenBankingConnectionAttemptStatusEnum,
  V3PaymentServiceUserLinkAttemptsCursorResponse,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserLinkAttemptsCursorResponse = {
  cursor: {
    data: [
      {
        clientRedirectURL: "https://metallic-behest.org/",
        connectorID: "<id>",
        createdAt: new Date("2024-04-06T02:11:25.340Z"),
        id: "<id>",
        psuID: "<id>",
        status: V3OpenBankingConnectionAttemptStatusEnum.Completed,
      },
    ],
    hasMore: false,
    next: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                          | [shared.V3PaymentServiceUserLinkAttemptsCursorResponseCursor](../../../sdk/models/shared/v3paymentserviceuserlinkattemptscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |