# TaskMangoPay

## Example Usage

```typescript
import { TaskMangoPay, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskMangoPay = {
  connectorID: "<id>",
  createdAt: new Date("2024-08-27T04:19:31.382Z"),
  descriptor: {},
  id: "11a2a6b7-9dfb-4794-b72f-853301575ec3",
  status: TaskStatus.Active,
  updatedAt: new Date("2025-10-30T17:43:24.588Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [payments.TaskMangoPayDescriptor](../../../sdk/models/payments/taskmangopaydescriptor.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [payments.TaskMangoPayState](../../../sdk/models/payments/taskmangopaystate.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |