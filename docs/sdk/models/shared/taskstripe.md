# TaskStripe

## Example Usage

```typescript
import { PaymentStatus, TaskStripe } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskStripe = {
  connectorID: "<value>",
  createdAt: new Date("2022-11-08T08:36:05.792Z"),
  descriptor: {
    account: "59179690",
    name: "<value>",
  },
  id: "6e3a4370-00ae-46b6-bc9b-8f759eac55a9",
  state: {},
  status: PaymentStatus.Refunded,
  updatedAt: new Date("2022-11-13T06:32:39.070Z"),
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