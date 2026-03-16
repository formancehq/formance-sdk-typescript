# V2GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {},
      name: "<value>",
      startedAt: new Date("2024-10-02T20:14:29.981Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.V2WorkflowInstanceHistory](../../../sdk/models/shared/v2workflowinstancehistory.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |