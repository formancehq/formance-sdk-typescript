# TaskModulr

## Example Usage

```typescript
import { PaymentStatus, TaskModulr } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskModulr = {
  connectorID: "<value>",
  createdAt: new Date("2023-04-07T17:10:31.500Z"),
  descriptor: {},
  id: "ea185f09-b4fd-4e09-84da-818af9ffa87e",
  state: {},
  status: PaymentStatus.Succeeded,
  updatedAt: new Date("2022-04-22T20:53:41.146Z"),
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
| `state`                                                                                       | [shared.TaskModulrState](../../../sdk/models/shared/taskmodulrstate.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |