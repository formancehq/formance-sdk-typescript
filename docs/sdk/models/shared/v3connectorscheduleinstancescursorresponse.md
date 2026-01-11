# V3ConnectorScheduleInstancesCursorResponse

## Example Usage

```typescript
import { V3ConnectorScheduleInstancesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorScheduleInstancesCursorResponse = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2025-01-21T16:01:21.394Z"),
        id: "<id>",
        scheduleID: "<id>",
        terminated: false,
        updatedAt: new Date("2026-03-29T01:12:39.596Z"),
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