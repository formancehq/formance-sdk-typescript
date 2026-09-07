# TaskMangoPay

## Example Usage

```typescript
import { TaskMangoPay } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskMangoPay = {
  connectorID: "<id>",
  createdAt: new Date("2024-08-27T04:19:31.382Z"),
  descriptor: {},
  id: "11a2a6b7-9dfb-4794-b72f-853301575ec3",
  status: "ACTIVE",
  updatedAt: new Date("2025-10-30T17:43:24.588Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the task runs against                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was created                                                                     |
| `descriptor`                                                                                  | [payments.TaskMangoPayDescriptor](../../../sdk/models/payments/taskmangopaydescriptor.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the task failed, absent when it succeeded                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the task                                                                 |
| `state`                                                                                       | [payments.TaskMangoPayState](../../../sdk/models/payments/taskmangopaystate.md)               | :heavy_minus_sign:                                                                            | Internal progress state the task resumes from                                                 |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | Where a task stands, from pending or active through to stopped, terminated or failed          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was last updated                                                                |