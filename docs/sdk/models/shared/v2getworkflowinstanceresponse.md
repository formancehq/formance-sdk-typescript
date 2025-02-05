# V2GetWorkflowInstanceResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2024-03-15T22:06:59.181Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2024-11-05T16:40:09.305Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |