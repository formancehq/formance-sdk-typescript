# CreateWorkflowResponse

## Example Usage

```typescript
import { CreateWorkflowResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: CreateWorkflowResponse = {
  workflow: {
    workflowConfig: {
      stages: [],
    },
    createdAt: new Date("2026-08-13T17:35:58.193Z"),
    id: "<id>",
    updatedAt: new Date("2025-06-18T23:26:47.377Z"),
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `workflow`                                                              | [orchestration.Workflow](../../../sdk/models/orchestration/workflow.md) | :heavy_check_mark:                                                      | N/A                                                                     |