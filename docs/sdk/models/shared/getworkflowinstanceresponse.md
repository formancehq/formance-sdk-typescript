# GetWorkflowInstanceResponse

## Example Usage

```typescript
import { GetWorkflowInstanceResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceResponse = {
  data: {
    createdAt: new Date("2023-02-11T10:54:43.392Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2022-05-27T06:40:08.045Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |