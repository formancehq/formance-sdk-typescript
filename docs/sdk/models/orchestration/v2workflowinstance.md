# V2WorkflowInstance

One run of a workflow, tracking its per-stage progress

## Example Usage

```typescript
import { V2WorkflowInstance } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstance = {
  createdAt: new Date("2026-08-09T23:10:58.132Z"),
  id: "<id>",
  terminated: false,
  updatedAt: new Date("2024-03-02T09:19:28.314Z"),
  workflowID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run was started                                                                      |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the run failed, absent when it succeeded                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the run                                                                  |
| `status`                                                                                      | [orchestration.V2StageStatus](../../../sdk/models/orchestration/v2stagestatus.md)[]           | :heavy_minus_sign:                                                                            | Per-stage progress of the run                                                                 |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the run has finished, successfully or not                                             |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the run finished, absent while it is still running                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the run was last updated                                                                 |
| `workflow`                                                                                    | [orchestration.V2Workflow](../../../sdk/models/orchestration/v2workflow.md)                   | :heavy_minus_sign:                                                                            | A workflow definition and the stages it runs                                                  |
| `workflowID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the workflow this run belongs to                                                |