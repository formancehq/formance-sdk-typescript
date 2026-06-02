# TaskCurrencyCloud

## Example Usage

```typescript
import { TaskCurrencyCloud, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskCurrencyCloud = {
  connectorID: "<id>",
  createdAt: new Date("2024-03-22T19:21:05.320Z"),
  descriptor: {},
  id: "94e1d644-1360-4a9f-b0c4-90fec3355365",
  status: TaskStatus.Active,
  updatedAt: new Date("2026-12-30T14:54:09.236Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `descriptor`                                                                                        | [payments.TaskCurrencyCloudDescriptor](../../../sdk/models/payments/taskcurrencyclouddescriptor.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `state`                                                                                             | [payments.TaskCurrencyCloudState](../../../sdk/models/payments/taskcurrencycloudstate.md)           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |