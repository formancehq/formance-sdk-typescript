# ResponseT

## Example Usage

```typescript
import { ResponseT } from "@formance/formance-sdk/sdk/models/search";

let value: ResponseT = {
  cursor: {
    next: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    total: {
      relation: "eq",
      value: 1,
    },
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `cursor`                                              | [search.Cursor](../../../sdk/models/search/cursor.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `data`                                                | Record<string, *any*>                                 | :heavy_minus_sign:                                    | The payload                                           |