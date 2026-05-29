# TaskBase

## Example Usage

```typescript
import { TaskBase, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskBase = {
  taskStatus: TaskStatus.Stopped,
  connectorID: "<id>",
  createdAt: new Date("2024-08-01T07:43:40.714Z"),
  descriptor: {
    account: "43228632",
    name: "<value>",
  },
  id: "8103b7c9-fe27-4b69-be9f-143868578db6",
  updatedAt: new Date("2026-01-09T06:39:10.391Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `taskStatus`                                                                                  | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [payments.Descriptor](../../../sdk/models/payments/descriptor.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [payments.State](../../../sdk/models/payments/state.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |