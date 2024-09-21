# TasksCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2022-12-24T23:48:47.088Z"),
        descriptor: {},
        id: "d8aca619-e6e8-49d9-b1f3-b873b1fd8648",
        state: {},
        status: PaymentStatus.Failed,
        updatedAt: new Date("2023-07-03T14:08:14.339Z"),
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