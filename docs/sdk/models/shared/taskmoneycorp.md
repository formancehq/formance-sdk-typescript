# TaskMoneycorp

## Example Usage

```typescript
import { PaymentStatus, TaskMoneycorp } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskMoneycorp = {
  connectorID: "<value>",
  createdAt: new Date("2022-10-16T08:01:27.253Z"),
  descriptor: {},
  id: "59e24977-de7a-4c84-aa9e-0e805b7f65d8",
  state: {},
  status: PaymentStatus.DisputeWon,
  updatedAt: new Date("2024-01-06T21:13:48.624Z"),
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
| `state`                                                                                       | [shared.TaskMoneycorpState](../../../sdk/models/shared/taskmoneycorpstate.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |