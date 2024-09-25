# V2ListTriggersResponse

## Example Usage

```typescript
import { V2ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListTriggersResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2023-11-06T16:40:09.305Z"),
        event: "<value>",
        id: "<id>",
        workflowID: "<value>",
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