# TaskCurrencyCloud

## Example Usage

```typescript
import { TaskCurrencyCloud, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskCurrencyCloud = {
  connectorID: "<id>",
  createdAt: new Date("2023-01-20T07:36:08.926Z"),
  descriptor: {},
  id: "1fce36f2-b6e4-47f0-b338-999743e75415",
  status: TaskStatus.Active,
  updatedAt: new Date("2023-11-26T15:56:58.022Z"),
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