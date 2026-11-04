# TriggerOccurrence

## Example Usage

```typescript
import { TriggerOccurrence } from "@formance/formance-sdk/sdk/models/orchestration";

let value: TriggerOccurrence = {
  date: new Date("2025-06-12T16:17:45.137Z"),
  event: {
    "key": "<value>",
  },
  triggerID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the trigger fired                                                                        |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the trigger failed to start a run, absent when it succeeded                               |
| `event`                                                                                       | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The event that fired the trigger                                                              |
| `triggerID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the trigger that fired                                                          |
| `workflowInstance`                                                                            | [orchestration.WorkflowInstance](../../../sdk/models/orchestration/workflowinstance.md)       | :heavy_minus_sign:                                                                            | One run of a workflow, tracking its per-stage progress                                        |
| `workflowInstanceID`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the run the trigger started, absent when it started none                        |