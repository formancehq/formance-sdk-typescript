# TaskModulr

## Example Usage

```typescript
import { PaymentStatus, TaskModulr } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskModulr = {
  connectorID: "<value>",
  createdAt: new Date("2022-04-27T10:55:45.115Z"),
  descriptor: {},
  id: "97f92443-da7c-4e52-b895-c537c6454efb",
  state: {},
  status: PaymentStatus.Pending,
  updatedAt: new Date("2024-03-08T09:23:46.256Z"),
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