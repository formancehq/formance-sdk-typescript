# TaskModulr

## Example Usage

```typescript
import { TaskModulr, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskModulr = {
  connectorID: "<id>",
  createdAt: new Date("2025-06-23T02:33:22.887Z"),
  descriptor: {},
  id: "b86ebf88-f7f3-4a90-850e-b08fe08de5a2",
  status: TaskStatus.Pending,
  updatedAt: new Date("2026-09-05T00:58:12.742Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [payments.TaskModulrDescriptor](../../../sdk/models/payments/taskmodulrdescriptor.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [payments.TaskModulrState](../../../sdk/models/payments/taskmodulrstate.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |