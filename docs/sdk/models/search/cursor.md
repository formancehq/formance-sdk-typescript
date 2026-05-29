# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/formance-sdk/sdk/models/search";

let value: Cursor = {
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
| `total`                                             | [search.Total](../../../sdk/models/search/total.md) | :heavy_minus_sign:                                  | N/A                                                 |                                                     |