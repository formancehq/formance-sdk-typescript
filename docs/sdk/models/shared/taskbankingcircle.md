# TaskBankingCircle

## Example Usage

```typescript
import { PaymentStatus, TaskBankingCircle } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskBankingCircle = {
  connectorID: "<value>",
  createdAt: new Date("2022-03-11T10:51:29.864Z"),
  descriptor: {},
  id: "6b3fa4c1-f0e4-4c04-ab81-669ad762cb68",
  state: {},
  status: PaymentStatus.Succeeded,
  updatedAt: new Date("2022-01-30T19:24:38.822Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.Descriptor](../../../sdk/models/shared/descriptor.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskBankingCircleState](../../../sdk/models/shared/taskbankingcirclestate.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |