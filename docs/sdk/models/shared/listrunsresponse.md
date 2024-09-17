# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListRunsResponse = {
  data: [
    {
      createdAt: new Date("2022-06-12T12:03:29.929Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2022-11-06T20:07:53.443Z"),
      workflowID: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.WorkflowInstance](../../../sdk/models/shared/workflowinstance.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |