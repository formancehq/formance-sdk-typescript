# ResponseCursor

## Example Usage

```typescript
import { ResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ResponseCursor = {
    next: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    total: {
        relation: "eq",
        value: 1,
    },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | Record<string, *any*>[]                             | :heavy_minus_sign:                                  | N/A                                                 |                                                     |
| `hasMore`                                           | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |                                                     |
| `next`                                              | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=        |
| `pageSize`                                          | *number*                                            | :heavy_minus_sign:                                  | N/A                                                 |                                                     |
| `previous`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=        |
| `total`                                             | [shared.Total](../../../sdk/models/shared/total.md) | :heavy_minus_sign:                                  | N/A                                                 |                                                     |