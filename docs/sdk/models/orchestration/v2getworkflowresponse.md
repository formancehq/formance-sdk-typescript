# V2GetWorkflowResponse

## Example Usage

```typescript
import { V2GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2GetWorkflowResponse = {
  v2Workflow: {
    v2WorkflowConfig: {
      stages: [
        {
          "key": "<value>",
        },
        {},
      ],
    },
    createdAt: new Date("2025-12-15T04:22:54.021Z"),
    id: "<id>",
    updatedAt: new Date("2025-02-07T04:15:31.810Z"),
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `v2Workflow`                                                                | [orchestration.V2Workflow](../../../sdk/models/orchestration/v2workflow.md) | :heavy_check_mark:                                                          | N/A                                                                         |