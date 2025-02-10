# GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {},
      name: "<value>",
      startedAt: new Date("2025-03-22T10:05:33.577Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.WorkflowInstanceHistory](../../../sdk/models/shared/workflowinstancehistory.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |