# TaskDummyPay

## Example Usage

```typescript
import { TaskDummyPay, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskDummyPay = {
  connectorID: "<id>",
  createdAt: new Date("2026-10-09T14:29:07.136Z"),
  descriptor: {},
  id: "523eba9a-ee19-4914-9377-3a887d589ebf",
  status: TaskStatus.Failed,
  updatedAt: new Date("2024-12-15T05:52:55.780Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [payments.TaskDummyPayDescriptor](../../../sdk/models/payments/taskdummypaydescriptor.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [payments.TaskDummyPayState](../../../sdk/models/payments/taskdummypaystate.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |