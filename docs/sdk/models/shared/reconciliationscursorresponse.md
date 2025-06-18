# ReconciliationsCursorResponse

OK

## Example Usage

```typescript
import { ReconciliationsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ReconciliationsCursorResponse = {
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

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                        | [shared.ReconciliationsCursorResponseCursor](../../../sdk/models/shared/reconciliationscursorresponsecursor.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |