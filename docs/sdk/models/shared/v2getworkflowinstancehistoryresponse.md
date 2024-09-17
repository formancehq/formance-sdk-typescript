# V2GetWorkflowInstanceHistoryResponse

## Example Usage

```typescript
import { V2GetWorkflowInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceHistoryResponse = {
  data: [
    {
      input: {},
      name: "<value>",
      startedAt: new Date("2023-11-13T23:09:57.015Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.V2WorkflowInstanceHistory](../../../sdk/models/shared/v2workflowinstancehistory.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |