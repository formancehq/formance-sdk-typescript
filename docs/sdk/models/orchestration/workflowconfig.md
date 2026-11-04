# WorkflowConfig

The stages a workflow runs, in order

## Example Usage

```typescript
import { WorkflowConfig } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowConfig = {
  stages: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `activityMaxAttempts`                                                                                                       | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Total attempts per stage activity, including the initial attempt. Stored at workflow creation; defaults to 15 when omitted. |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Human-readable name for the workflow                                                                                        |
| `stages`                                                                                                                    | Record<string, *any*>[]                                                                                                     | :heavy_check_mark:                                                                                                          | The stages executed in order when the workflow runs                                                                         |