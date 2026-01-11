# GetWorkflowInstanceResponse

## Example Usage

```typescript
import { GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2025-08-22T11:34:21.782Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2024-07-15T01:44:56.966Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |