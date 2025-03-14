# V2GetWorkflowInstanceResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2024-07-27T09:05:42.579Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-10-02T13:41:36.618Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |