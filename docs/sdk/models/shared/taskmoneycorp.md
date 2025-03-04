# TaskMoneycorp

## Example Usage

```typescript
import { TaskMoneycorp, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskMoneycorp = {
  connectorID: "<id>",
  createdAt: new Date("2025-04-28T22:11:42.800Z"),
  descriptor: {},
  id: "7abb0150-66e9-4be7-a04d-e54e5a418e93",
  status: TaskStatus.Terminated,
  updatedAt: new Date("2023-12-18T13:17:08.954Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskMoneycorpDescriptor](../../../sdk/models/shared/taskmoneycorpdescriptor.md)       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskMoneycorpState](../../../sdk/models/shared/taskmoneycorpstate.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |