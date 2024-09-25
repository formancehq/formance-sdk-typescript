# TaskCurrencyCloud

## Example Usage

```typescript
import { PaymentStatus, TaskCurrencyCloud } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskCurrencyCloud = {
  connectorID: "<value>",
  createdAt: new Date("2024-07-03T06:10:20.109Z"),
  descriptor: {},
  id: "3698fabf-6502-432c-88ad-35b606e65fa5",
  state: {},
  status: PaymentStatus.DisputeWon,
  updatedAt: new Date("2024-02-16T01:12:10.982Z"),
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
| `state`                                                                                         | [shared.TaskCurrencyCloudState](../../../sdk/models/shared/taskcurrencycloudstate.md)           | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `status`                                                                                        | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                             | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |