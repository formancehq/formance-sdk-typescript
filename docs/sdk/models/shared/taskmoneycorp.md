# TaskMoneycorp

## Example Usage

```typescript
import { PaymentStatus, TaskMoneycorp } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskMoneycorp = {
  connectorID: "<value>",
  createdAt: new Date("2024-12-18T05:29:23.891Z"),
  descriptor: {},
  id: "09b4fde0-94da-4818-aaf9-ffa87e011c5a",
  state: {},
  status: PaymentStatus.Expired,
  updatedAt: new Date("2023-08-06T14:21:26.517Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `descriptor`                                                                                  | [shared.TaskMoneycorpDescriptor](../../../sdk/models/shared/taskmoneycorpdescriptor.md)       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.TaskMoneycorpState](../../../sdk/models/shared/taskmoneycorpstate.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |