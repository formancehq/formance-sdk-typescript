# TaskBankingCircle

## Example Usage

```typescript
import { PaymentStatus, TaskBankingCircle } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskBankingCircle = {
    connectorID: "<value>",
    createdAt: new Date("2022-06-30T06:42:11.302Z"),
    descriptor: {},
    id: "eb07f116-db99-4545-bc95-fa88970e189d",
    state: {},
    status: PaymentStatus.DisputeWon,
    updatedAt: new Date("2024-03-06T05:29:10.472Z"),
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