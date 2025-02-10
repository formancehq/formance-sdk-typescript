# TaskBankingCircle

## Example Usage

```typescript
import { TaskBankingCircle, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskBankingCircle = {
  connectorID: "<id>",
  createdAt: new Date("2025-09-09T18:38:44.004Z"),
  descriptor: {},
  id: "42e25b43-6ce0-42f9-98d0-0fdb27ee0c0f",
  status: TaskStatus.Failed,
  updatedAt: new Date("2024-02-08T01:12:43.433Z"),
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
| `state`                                                                                       | [shared.TaskBankingCircleState](../../../sdk/models/shared/taskbankingcirclestate.md)         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |