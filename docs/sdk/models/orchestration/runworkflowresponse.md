# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: RunWorkflowResponse = {
  workflowInstance: {
    createdAt: new Date("2025-08-22T11:34:21.782Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2024-07-15T01:44:56.966Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `workflowInstance`                                                                      | [orchestration.WorkflowInstance](../../../sdk/models/orchestration/workflowinstance.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |