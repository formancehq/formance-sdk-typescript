# TaskDummyPay

## Example Usage

```typescript
import { PaymentStatus, TaskDummyPay } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskDummyPay = {
  connectorID: "<id>",
  createdAt: new Date("2022-05-17T09:48:42.675Z"),
  descriptor: {},
  id: "1c23ef5d-d999-4493-b26b-9fa22139de68",
  state: {},
  status: PaymentStatus.Failed,
  updatedAt: new Date("2023-10-15T20:28:38.974Z"),
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