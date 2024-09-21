# V2GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {
        event: "<value>",
      },
      name: "<value>",
      startedAt: new Date("2024-03-21T15:17:35.920Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.V2WorkflowInstanceHistory](../../../sdk/models/shared/v2workflowinstancehistory.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |