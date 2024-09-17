# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: RunWorkflowResponse = {
  data: {
    createdAt: new Date("2023-05-20T09:37:09.099Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2023-02-13T10:57:01.355Z"),
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |