# TaskWise

## Example Usage

```typescript
import { PaymentStatus, TaskWise } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskWise = {
  connectorID: "<id>",
  createdAt: new Date("2024-08-21T13:28:33.020Z"),
  descriptor: {},
  id: "5db6acdd-2d03-4919-8465-18f94f6bafe2",
  state: {},
  status: PaymentStatus.DisputeWon,
  updatedAt: new Date("2025-09-18T19:37:34.618Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskWiseDescriptor](../../../sdk/models/shared/taskwisedescriptor.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskWiseState](../../../sdk/models/shared/taskwisestate.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |