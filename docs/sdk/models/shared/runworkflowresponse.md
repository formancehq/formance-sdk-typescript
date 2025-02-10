# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: RunWorkflowResponse = {
  data: {
    createdAt: new Date("2025-06-01T10:04:24.136Z"),
    id: "<id>",
    terminated: false,
    updatedAt: new Date("2025-04-23T02:16:34.389Z"),
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md) | :heavy_check_mark:                                                        | N/A                                                                       |