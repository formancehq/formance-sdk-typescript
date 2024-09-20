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
      createdAt: new Date("2022-05-02T01:59:23.702Z"),
      id: "<id>",
      updatedAt: new Date("2024-07-02T07:32:20.657Z"),
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.Workflow](../../../sdk/models/shared/workflow.md)[] | :heavy_check_mark:                                          | N/A                                                         |