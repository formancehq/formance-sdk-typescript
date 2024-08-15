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
                        key: "<value>",
                    },
                ],
            },
            createdAt: new Date("2023-04-30T11:18:18.794Z"),
            id: "<id>",
            updatedAt: new Date("2024-12-22T06:59:24.227Z"),
        },
    ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.Workflow](../../../sdk/models/shared/workflow.md)[] | :heavy_check_mark:                                          | N/A                                                         |