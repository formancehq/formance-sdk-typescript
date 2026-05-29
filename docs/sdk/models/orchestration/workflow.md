# Workflow

## Example Usage

```typescript
import { Workflow } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Workflow = {
  workflowConfig: {
    stages: [],
  },
  createdAt: new Date("2025-01-04T11:44:20.070Z"),
  id: "<id>",
  updatedAt: new Date("2024-02-13T10:14:57.926Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workflowConfig`                                                                              | [orchestration.WorkflowConfig](../../../sdk/models/orchestration/workflowconfig.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |