# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListRunsResponse = {
  data: [
    {
      createdAt: new Date("2024-01-07T06:52:38.269Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2024-03-07T01:42:43.656Z"),
      workflowID: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |