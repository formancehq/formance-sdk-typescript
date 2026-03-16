# V3PaymentServiceUserConnectionsCursorResponse

## Example Usage

```typescript
import { V3ConnectionStatusEnum, V3PaymentServiceUserConnectionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserConnectionsCursorResponse = {
  cursor: {
    data: [
      {
        connectionID: "<id>",
        connectorID: "<id>",
        createdAt: new Date("2024-12-29T18:49:47.524Z"),
        dataUpdatedAt: new Date("2024-12-30T07:11:43.584Z"),
        status: V3ConnectionStatusEnum.Error,
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

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                        | [shared.V3PaymentServiceUserConnectionsCursorResponseCursor](../../../sdk/models/shared/v3paymentserviceuserconnectionscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |