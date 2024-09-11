# TriggerOccurrence

## Example Usage

```typescript
import { TriggerOccurrence } from "@formance/formance-sdk/sdk/models/shared";

let value: TriggerOccurrence = {
  date: new Date("2024-12-22T06:59:24.227Z"),
  event: {
    "key": "<value>",
  },
  triggerID: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `event`                                                                                       | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggerID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowInstance`                                                                            | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workflowInstanceID`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |