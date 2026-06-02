# GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {
        event: "<value>",
      },
      name: "<value>",
      startedAt: new Date("2025-10-07T03:35:37.426Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [orchestration.WorkflowInstanceHistory](../../../sdk/models/orchestration/workflowinstancehistory.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |