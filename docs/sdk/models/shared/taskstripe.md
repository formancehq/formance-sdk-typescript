# TaskStripe

## Example Usage

```typescript
import { PaymentStatus, TaskStripe } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskStripe = {
  connectorID: "<id>",
  createdAt: new Date("2023-02-07T09:13:36.865Z"),
  descriptor: {
    account: "68381295",
    name: "<value>",
  },
  id: "9020e2d5-c541-447d-b7f8-06b3b80c8174",
  state: {},
  status: PaymentStatus.Failed,
  updatedAt: new Date("2025-10-29T02:08:12.174Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskStripeDescriptor](../../../sdk/models/shared/taskstripedescriptor.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskStripeState](../../../sdk/models/shared/taskstripestate.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |