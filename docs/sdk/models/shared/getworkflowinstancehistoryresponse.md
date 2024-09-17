# GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {},
      name: "<value>",
      startedAt: new Date("2024-02-23T20:03:42.513Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.WorkflowInstanceHistory](../../../sdk/models/shared/workflowinstancehistory.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |