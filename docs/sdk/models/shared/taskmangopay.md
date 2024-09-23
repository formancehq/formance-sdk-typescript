# TaskMangoPay

## Example Usage

```typescript
import { PaymentStatus, TaskMangoPay } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskMangoPay = {
  connectorID: "<value>",
  createdAt: new Date("2022-12-14T23:37:02.292Z"),
  descriptor: {},
  id: "97bd72d9-bbf4-4b56-a35f-43947d3698fa",
  state: {},
  status: PaymentStatus.Other,
  updatedAt: new Date("2023-03-31T05:22:40.136Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskMangoPayDescriptor](../../../sdk/models/shared/taskmangopaydescriptor.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskMangoPayState](../../../sdk/models/shared/taskmangopaystate.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |