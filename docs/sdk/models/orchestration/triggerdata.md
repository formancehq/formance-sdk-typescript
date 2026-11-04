# TriggerData

## Example Usage

```typescript
import { TriggerData } from "@formance/formance-sdk/sdk/models/orchestration";

let value: TriggerData = {
  event: "<value>",
  workflowID: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `event`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | Type of event that fires this trigger                                           |
| `filter`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Expression evaluated against the event. The workflow runs only when it matches  |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Human-readable name for the trigger                                             |
| `vars`                                                                          | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | Expressions evaluated against the event to build the workflow's input variables |
| `version`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Version of the trigger definition                                               |
| `workflowID`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Identifier of the workflow to run when the trigger fires                        |