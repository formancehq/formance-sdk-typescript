# TaskMoneycorp

## Example Usage

```typescript
import { PaymentStatus, TaskMoneycorp } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskMoneycorp = {
  connectorID: "<value>",
  createdAt: new Date("2022-05-12T19:46:31.013Z"),
  descriptor: {},
  id: "fc0e115c-80bf-4f91-8544-ec42defcce8f",
  state: {},
  status: PaymentStatus.Pending,
  updatedAt: new Date("2023-09-21T11:52:09.779Z"),
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