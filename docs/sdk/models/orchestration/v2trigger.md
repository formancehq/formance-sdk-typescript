# V2Trigger

A rule that starts a workflow when a matching event arrives

## Example Usage

```typescript
import { V2Trigger } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Trigger = {
  createdAt: new Date("2026-08-21T22:03:59.068Z"),
  event: "<value>",
  id: "<id>",
  workflowID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Type of event that fires this trigger                                                         |
| `filter`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Expression evaluated against the event. The workflow runs only when it matches                |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name for the trigger                                                           |
| `vars`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Expressions evaluated against the event to build the workflow's input variables               |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Version of the trigger definition                                                             |
| `workflowID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the workflow to run when the trigger fires                                      |