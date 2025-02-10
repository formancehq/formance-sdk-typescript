# V3ConnectorScheduleInstancesCursorResponse

## Example Usage

```typescript
import { V3ConnectorScheduleInstancesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorScheduleInstancesCursorResponse = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2023-09-16T04:04:59.142Z"),
        id: "<id>",
        scheduleID: "<id>",
        terminated: false,
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                  | [shared.V3ConnectorScheduleInstancesCursorResponseCursor](../../../sdk/models/shared/v3connectorscheduleinstancescursorresponsecursor.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |