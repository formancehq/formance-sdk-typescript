# TasksCursor

OK

## Example Usage

```typescript
import { PaymentStatus, TasksCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<id>",
        createdAt: new Date("2023-10-02T02:39:34.529Z"),
        descriptor: {},
        id: "fc4941da-926e-4203-94ca-009a293561ff",
        state: {},
        status: PaymentStatus.Cancelled,
        updatedAt: new Date("2025-11-16T14:52:05.958Z"),
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | [shared.TasksCursorCursor](../../../sdk/models/shared/taskscursorcursor.md) | :heavy_check_mark:                                                          | N/A                                                                         |