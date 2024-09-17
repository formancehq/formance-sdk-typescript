# V2GetWorkflowInstanceResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2023-07-05T23:16:18.690Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-03-21T21:54:24.703Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |