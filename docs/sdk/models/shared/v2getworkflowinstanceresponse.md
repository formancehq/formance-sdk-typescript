# V2GetWorkflowInstanceResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceResponse = {
    data: {
        createdAt: new Date("2023-08-14T20:57:57.462Z"),
        id: "<id>",
        terminated: false,
        updatedAt: new Date("2023-11-15T03:08:35.076Z"),
        workflowID: "<value>",
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md) | :heavy_check_mark:                                                            | N/A                                                                           |