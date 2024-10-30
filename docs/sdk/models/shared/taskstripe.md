# TaskStripe

## Example Usage

```typescript
import { PaymentStatus, TaskStripe } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskStripe = {
  connectorID: "<id>",
  createdAt: new Date("2024-09-18T19:37:34.618Z"),
  descriptor: {
    account: "46021610",
    name: "<value>",
  },
  id: "4a95d448-7728-446b-aec6-9b652bd5c9c6",
  state: {},
  status: PaymentStatus.Expired,
  updatedAt: new Date("2022-04-08T06:41:24.174Z"),
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