# TasksCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2024-09-11T02:43:05.010Z"),
        descriptor: {},
        id: "723417ea-1045-4cf6-8afb-a15e3db588b8",
        state: {},
        status: PaymentStatus.DisputeWon,
        updatedAt: new Date("2023-03-22T06:35:30.331Z"),
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