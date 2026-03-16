# V3PaymentServiceUserConnectionsCursorResponseCursor

## Example Usage

```typescript
import { V3ConnectionStatusEnum, V3PaymentServiceUserConnectionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserConnectionsCursorResponseCursor = {
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
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [shared.V3PaymentServiceUserConnection](../../../sdk/models/shared/v3paymentserviceuserconnection.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `hasMore`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `next`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                            |
| `pageSize`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 15                                                                                                      |
| `previous`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                            |