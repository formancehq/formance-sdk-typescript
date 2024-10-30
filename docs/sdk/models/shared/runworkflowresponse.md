# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: RunWorkflowResponse = {
  data: {
    createdAt: new Date("2023-09-30T18:00:24.289Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2022-05-19T11:58:16.990Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |