# V2RunWorkflowResponse

## Example Usage

```typescript
import { V2RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2RunWorkflowResponse = {
  data: {
    createdAt: new Date("2023-09-05T03:23:29.598Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2022-01-19T16:14:20.571Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |