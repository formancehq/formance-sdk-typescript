# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListRunsResponse = {
  data: [
    {
      createdAt: new Date("2023-03-09T19:55:57.710Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2025-06-19T03:34:00.039Z"),
      workflowID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |