# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListRunsResponse = {
  data: [
    {
      createdAt: new Date("2022-07-22T21:18:05.375Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2022-01-07T19:10:28.633Z"),
      workflowID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |