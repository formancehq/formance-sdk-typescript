# TaskWise

## Example Usage

```typescript
import { TaskStatus, TaskWise } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskWise = {
  connectorID: "<id>",
  createdAt: new Date("2024-08-26T10:25:40.305Z"),
  descriptor: {},
  id: "74e6066d-c3d3-4510-8ae7-dcafc4cb613c",
  status: TaskStatus.Failed,
  updatedAt: new Date("2025-01-30T14:39:50.524Z"),
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