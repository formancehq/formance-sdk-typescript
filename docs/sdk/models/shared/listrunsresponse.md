# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListRunsResponse = {
  data: [
    {
      createdAt: new Date("2024-02-10T16:41:01.958Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2024-11-06T09:51:30.567Z"),
      workflowID: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |