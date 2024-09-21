# V2TriggerOccurrence

## Example Usage

```typescript
import { V2TriggerOccurrence } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TriggerOccurrence = {
  date: new Date("2022-04-03T07:05:35.185Z"),
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
| `workflowInstance`                                                                            | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workflowInstanceID`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |