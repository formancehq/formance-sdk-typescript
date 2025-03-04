# V2RunWorkflowResponse

## Example Usage

```typescript
import { V2RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2RunWorkflowResponse = {
  data: {
    createdAt: new Date("2023-06-19T02:07:21.588Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-12-09T02:01:52.269Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |