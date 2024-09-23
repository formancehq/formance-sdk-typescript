# GetWorkflowInstanceResponse

## Example Usage

```typescript
import { GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2023-08-07T19:18:52.289Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2022-12-24T14:11:47.102Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |