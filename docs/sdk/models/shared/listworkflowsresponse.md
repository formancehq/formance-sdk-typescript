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
      createdAt: new Date("2022-04-23T03:20:29.490Z"),
      id: "<id>",
      updatedAt: new Date("2022-11-17T05:26:00.288Z"),
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.Workflow](../../../sdk/models/shared/workflow.md)[] | :heavy_check_mark:                                          | N/A                                                         |