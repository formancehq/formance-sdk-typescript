# TaskCurrencyCloud

## Example Usage

```typescript
import { TaskCurrencyCloud } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskCurrencyCloud = {
  connectorID: "<id>",
  createdAt: new Date("2024-03-22T19:21:05.320Z"),
  descriptor: {},
  id: "94e1d644-1360-4a9f-b0c4-90fec3355365",
  status: "ACTIVE",
  updatedAt: new Date("2026-12-30T14:54:09.236Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Identifier of the connector the task runs against                                                   |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When the task was created                                                                           |
| `descriptor`                                                                                        | [payments.TaskCurrencyCloudDescriptor](../../../sdk/models/payments/taskcurrencyclouddescriptor.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Why the task failed, absent when it succeeded                                                       |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier of the task                                                                       |
| `state`                                                                                             | [payments.TaskCurrencyCloudState](../../../sdk/models/payments/taskcurrencycloudstate.md)           | :heavy_minus_sign:                                                                                  | Internal progress state the task resumes from                                                       |
| `status`                                                                                            | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                                   | :heavy_check_mark:                                                                                  | Where a task stands, from pending or active through to stopped, terminated or failed                |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When the task was last updated                                                                      |