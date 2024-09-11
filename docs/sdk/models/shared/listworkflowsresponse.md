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
      createdAt: new Date("2023-07-24T20:49:38.442Z"),
      id: "<id>",
      updatedAt: new Date("2023-02-24T21:08:18.118Z"),
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.Workflow](../../../sdk/models/shared/workflow.md)[] | :heavy_check_mark:                                          | N/A                                                         |