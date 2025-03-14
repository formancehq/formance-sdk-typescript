# TaskCurrencyCloud

## Example Usage

```typescript
import { TaskCurrencyCloud, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskCurrencyCloud = {
  connectorID: "<id>",
  createdAt: new Date("2023-08-23T22:30:47.041Z"),
  descriptor: {},
  id: "c3fb799f-24b3-4d52-909d-4ec099357022",
  status: TaskStatus.Terminated,
  updatedAt: new Date("2025-06-30T02:36:41.216Z"),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `descriptor`                                                                                    | [shared.TaskCurrencyCloudDescriptor](../../../sdk/models/shared/taskcurrencyclouddescriptor.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `error`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `state`                                                                                         | [shared.TaskCurrencyCloudState](../../../sdk/models/shared/taskcurrencycloudstate.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `status`                                                                                        | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |