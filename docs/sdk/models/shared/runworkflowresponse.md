# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: RunWorkflowResponse = {
  data: {
    createdAt: new Date("2024-06-03T02:37:48.114Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2022-04-10T14:39:29.648Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |