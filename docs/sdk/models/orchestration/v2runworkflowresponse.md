# V2RunWorkflowResponse

## Example Usage

```typescript
import { V2RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2RunWorkflowResponse = {
  v2WorkflowInstance: {
    createdAt: new Date("2024-11-03T15:17:55.065Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2025-03-21T07:14:48.236Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `v2WorkflowInstance`                                                                        | [orchestration.V2WorkflowInstance](../../../sdk/models/orchestration/v2workflowinstance.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |