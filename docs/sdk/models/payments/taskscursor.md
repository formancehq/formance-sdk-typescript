# TasksCursor

OK

## Example Usage

```typescript
import { TasksCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: TasksCursor = {
  cursor: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cursor`                                                                        | [payments.TasksCursorCursor](../../../sdk/models/payments/taskscursorcursor.md) | :heavy_check_mark:                                                              | N/A                                                                             |