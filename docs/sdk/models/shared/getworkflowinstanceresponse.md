# GetWorkflowInstanceResponse

## Example Usage

```typescript
import { GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2024-01-27T06:25:05.269Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-06-03T15:35:47.337Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |