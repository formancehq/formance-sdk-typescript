# TaskStripe

## Example Usage

```typescript
import { TaskStripe } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskStripe = {
  connectorID: "<id>",
  createdAt: new Date("2026-06-02T13:01:59.148Z"),
  descriptor: {
    account: "37017136",
    name: "<value>",
  },
  id: "d7bbcd3f-23c2-471c-b974-71bba572df56",
  status: "TERMINATED",
  updatedAt: new Date("2026-08-06T15:33:18.930Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the task runs against                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was created                                                                     |
| `descriptor`                                                                                  | [payments.TaskStripeDescriptor](../../../sdk/models/payments/taskstripedescriptor.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the task failed, absent when it succeeded                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the task                                                                 |
| `state`                                                                                       | [payments.TaskStripeState](../../../sdk/models/payments/taskstripestate.md)                   | :heavy_minus_sign:                                                                            | Internal progress state the task resumes from                                                 |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | Where a task stands, from pending or active through to stopped, terminated or failed          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the task was last updated                                                                |