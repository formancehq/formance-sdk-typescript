# TaskBankingCircle

## Example Usage

```typescript
import { PaymentStatus, TaskBankingCircle } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskBankingCircle = {
  connectorID: "<value>",
  createdAt: new Date("2024-03-10T11:24:11.514Z"),
  descriptor: {},
  id: "99545fc9-5fa8-4897-8e18-9dbb30fcb33e",
  state: {},
  status: PaymentStatus.Dispute,
  updatedAt: new Date("2022-02-17T01:04:40.742Z"),
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