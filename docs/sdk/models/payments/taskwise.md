# TaskWise

## Example Usage

```typescript
import { TaskStatus, TaskWise } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskWise = {
  connectorID: "<id>",
  createdAt: new Date("2025-10-15T10:07:14.906Z"),
  descriptor: {},
  id: "24a5d2b6-06be-4ce5-98c8-dd49a985ef0e",
  status: TaskStatus.Terminated,
  updatedAt: new Date("2024-09-11T00:50:50.011Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [payments.TaskWiseDescriptor](../../../sdk/models/payments/taskwisedescriptor.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [payments.TaskWiseState](../../../sdk/models/payments/taskwisestate.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |