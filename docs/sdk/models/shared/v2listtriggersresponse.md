# V2ListTriggersResponse

## Example Usage

```typescript
import { V2ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListTriggersResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-03-04T20:48:07.480Z"),
        event: "<value>",
        id: "<id>",
        workflowID: "<id>",
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [shared.V2ListTriggersResponseCursor](../../../sdk/models/shared/v2listtriggersresponsecursor.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |