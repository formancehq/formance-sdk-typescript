# ListWorkflowsResponse

## Example Usage

```typescript
import { ListWorkflowsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWorkflowsResponse = {
  data: [
    {
      config: {
        stages: [
          {
            "key": "<value>",
          },
        ],
      },
      createdAt: new Date("2025-12-13T23:26:30.191Z"),
      id: "<id>",
      updatedAt: new Date("2023-01-02T17:56:36.906Z"),
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.Workflow](../../../sdk/models/shared/workflow.md)[] | :heavy_check_mark:                                          | N/A                                                         |