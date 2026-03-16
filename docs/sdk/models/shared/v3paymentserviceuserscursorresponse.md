# V3PaymentServiceUsersCursorResponse

## Example Usage

```typescript
import { V3PaymentServiceUsersCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUsersCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-08-20T08:47:45.932Z"),
        id: "<id>",
        name: "<value>",
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

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                    | [shared.V3PaymentServiceUsersCursorResponseCursor](../../../sdk/models/shared/v3paymentserviceuserscursorresponsecursor.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |