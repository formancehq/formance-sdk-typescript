# V3PaymentServiceUsersCursorResponseCursor

## Example Usage

```typescript
import { V3PaymentServiceUsersCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUsersCursorResponseCursor = {
  data: [],
  hasMore: false,
  next: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [shared.V3PaymentServiceUser](../../../sdk/models/shared/v3paymentserviceuser.md)[] | :heavy_check_mark:                                                                  | N/A                                                                                 |                                                                                     |
| `hasMore`                                                                           | *boolean*                                                                           | :heavy_check_mark:                                                                  | N/A                                                                                 | false                                                                               |
| `next`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                        |
| `pageSize`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 | 15                                                                                  |
| `previous`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                        |