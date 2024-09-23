# TaskDummyPay

## Example Usage

```typescript
import { PaymentStatus, TaskDummyPay } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskDummyPay = {
  connectorID: "<value>",
  createdAt: new Date("2022-05-23T01:29:58.027Z"),
  descriptor: {},
  id: "081bb2fb-4bb5-4659-ae2e-0a6cb7a8c784",
  state: {},
  status: PaymentStatus.Failed,
  updatedAt: new Date("2023-09-25T16:52:43.387Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskDummyPayDescriptor](../../../sdk/models/shared/taskdummypaydescriptor.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskDummyPayState](../../../sdk/models/shared/taskdummypaystate.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |