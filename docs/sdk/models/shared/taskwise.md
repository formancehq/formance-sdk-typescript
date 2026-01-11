# TaskWise

## Example Usage

```typescript
import { TaskStatus, TaskWise } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskWise = {
  connectorID: "<id>",
  createdAt: new Date("2024-01-02T14:55:44.073Z"),
  descriptor: {},
  id: "fb608d09-fa9e-4cc0-a730-91f7bd0fa498",
  status: TaskStatus.Failed,
  updatedAt: new Date("2025-12-20T10:23:41.730Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskWiseDescriptor](../../../sdk/models/shared/taskwisedescriptor.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskWiseState](../../../sdk/models/shared/taskwisestate.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |