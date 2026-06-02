# TaskBankingCircle

## Example Usage

```typescript
import { TaskBankingCircle, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TaskBankingCircle = {
  connectorID: "<id>",
  createdAt: new Date("2026-02-09T23:44:42.209Z"),
  descriptor: {},
  id: "13801384-7b39-4de4-a76c-637b036c5eef",
  status: TaskStatus.Failed,
  updatedAt: new Date("2026-01-28T08:33:30.639Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `descriptor`                                                                                        | [payments.TaskBankingCircleDescriptor](../../../sdk/models/payments/taskbankingcircledescriptor.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `state`                                                                                             | [payments.TaskBankingCircleState](../../../sdk/models/payments/taskbankingcirclestate.md)           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [payments.TaskStatus](../../../sdk/models/payments/taskstatus.md)                                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |