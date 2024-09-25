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
        createdAt: new Date("2023-05-14T05:31:54.723Z"),
        id: "<id>",
        updatedAt: new Date("2022-08-18T17:23:24.649Z"),
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