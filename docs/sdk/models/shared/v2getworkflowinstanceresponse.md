# V2GetWorkflowInstanceResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2025-03-02T20:38:32.287Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-09-19T15:47:11.283Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |