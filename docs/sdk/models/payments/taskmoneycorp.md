# TaskMoneycorp

## Example Usage

```typescript
import { TaskMoneycorp } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskMoneycorp = {
  connectorID: "<id>",
  createdAt: new Date("2026-10-26T14:35:16.701Z"),
  descriptor: {},
  id: "dff360a4-38e4-4fed-acd7-718debb5724a",
  status: "FAILED",
  updatedAt: new Date("2024-09-10T18:34:27.392Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the task runs against                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was created                                                                     |
| `descriptor`                                                                                  | [payments.TaskMoneycorpDescriptor](../../../sdk/models/payments/taskmoneycorpdescriptor.md)   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the task failed, absent when it succeeded                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the task                                                                 |
| `state`                                                                                       | [payments.TaskMoneycorpState](../../../sdk/models/payments/taskmoneycorpstate.md)             | :heavy_minus_sign:                                                                            | Internal progress state the task resumes from                                                 |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | Where a task stands, from pending or active through to stopped, terminated or failed          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was last updated                                                                |