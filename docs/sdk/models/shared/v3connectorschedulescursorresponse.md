# V3ConnectorSchedulesCursorResponse

## Example Usage

```typescript
import { V3ConnectorSchedulesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorSchedulesCursorResponse = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2024-11-07T06:42:18.331Z"),
        id: "<id>",
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

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                  | [shared.V3ConnectorSchedulesCursorResponseCursor](../../../sdk/models/shared/v3connectorschedulescursorresponsecursor.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |