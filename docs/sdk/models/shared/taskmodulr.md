# TaskModulr

## Example Usage

```typescript
import { TaskModulr, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskModulr = {
  connectorID: "<id>",
  createdAt: new Date("2023-03-28T20:15:02.629Z"),
  descriptor: {},
  id: "0539ebcf-a99d-46ca-8403-b946a266885c",
  status: TaskStatus.Pending,
  updatedAt: new Date("2024-04-05T14:30:06.008Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskModulrDescriptor](../../../sdk/models/shared/taskmodulrdescriptor.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskModulrState](../../../sdk/models/shared/taskmodulrstate.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TaskStatus](../../../sdk/models/shared/taskstatus.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |