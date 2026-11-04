# WorkflowInstance

One run of a workflow, tracking its per-stage progress

## Example Usage

```typescript
import { WorkflowInstance } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstance = {
  createdAt: new Date("2026-11-29T08:37:17.643Z"),
  id: "<id>",
  terminated: false,
  updatedAt: new Date("2025-10-10T05:23:50.023Z"),
  workflowID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run was started                                                                      |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the run failed, absent when it succeeded                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the run                                                                  |
| `status`                                                                                      | [orchestration.StageStatus](../../../sdk/models/orchestration/stagestatus.md)[]               | :heavy_minus_sign:                                                                            | Per-stage progress of the run                                                                 |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the run has finished, successfully or not                                             |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the run finished, absent while it is still running                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run was last updated                                                                 |
| `workflow`                                                                                    | [orchestration.Workflow](../../../sdk/models/orchestration/workflow.md)                       | :heavy_minus_sign:                                                                            | A workflow definition and the stages it runs                                                  |
| `workflowID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the workflow this run belongs to                                                |