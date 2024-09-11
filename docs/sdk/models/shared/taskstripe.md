# TaskStripe

## Example Usage

```typescript
import { PaymentStatus, TaskStripe } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskStripe = {
  connectorID: "<value>",
  createdAt: new Date("2022-04-07T17:16:54.121Z"),
  descriptor: {
    account: "26878113",
    name: "<value>",
  },
  id: "9b1abda8-c070-4e10-84cb-0672d1ad879e",
  state: {},
  status: PaymentStatus.DisputeLost,
  updatedAt: new Date("2024-03-14T16:26:14.570Z"),
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