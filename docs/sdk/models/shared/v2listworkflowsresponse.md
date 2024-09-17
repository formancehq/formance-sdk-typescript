# V2ListWorkflowsResponse

## Example Usage

```typescript
import { V2ListWorkflowsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWorkflowsResponse = {
  cursor: {
    data: [
      {
        config: {
          stages: [
            {
              "key": "<value>",
            },
          ],
        },
        createdAt: new Date("2024-09-25T16:07:48.339Z"),
        id: "<id>",
        updatedAt: new Date("2024-04-27T16:58:28.547Z"),
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                            | [shared.V2ListWorkflowsResponseCursor](../../../sdk/models/shared/v2listworkflowsresponsecursor.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |