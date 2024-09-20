# TaskDummyPay

## Example Usage

```typescript
import { PaymentStatus, TaskDummyPay } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskDummyPay = {
  connectorID: "<value>",
  createdAt: new Date("2024-11-05T14:24:14.707Z"),
  descriptor: {},
  id: "2ceda7e2-3f22-4574-91fa-f4b7544e472e",
  state: {},
  status: PaymentStatus.Refunded,
  updatedAt: new Date("2022-02-18T05:48:22.961Z"),
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