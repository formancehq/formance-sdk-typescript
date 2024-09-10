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
        createdAt: new Date("2023-10-04T15:12:18.793Z"),
        id: "<id>",
        updatedAt: new Date("2024-11-29T22:07:11.339Z"),
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