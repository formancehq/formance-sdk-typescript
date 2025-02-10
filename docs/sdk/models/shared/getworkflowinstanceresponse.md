# GetWorkflowInstanceResponse

## Example Usage

```typescript
import { GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2025-12-08T23:54:11.569Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2025-09-12T02:41:54.847Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |