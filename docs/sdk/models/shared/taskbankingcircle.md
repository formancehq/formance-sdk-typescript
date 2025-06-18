# TaskBankingCircle

## Example Usage

```typescript
import { TaskBankingCircle, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskBankingCircle = {
  connectorID: "<id>",
  createdAt: new Date("2024-11-30T07:32:33.754Z"),
  descriptor: {},
  id: "e0044afb-5429-41dd-bd12-bf631eb1934c",
  status: TaskStatus.Failed,
  updatedAt: new Date("2024-10-22T22:58:55.068Z"),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `descriptor`                                                                                    | [shared.TaskBankingCircleDescriptor](../../../sdk/models/shared/taskbankingcircledescriptor.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `error`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `state`                                                                                         | [shared.TaskBankingCircleState](../../../sdk/models/shared/taskbankingcirclestate.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `status`                                                                                        | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |