# TaskCurrencyCloud

## Example Usage

```typescript
import { PaymentStatus, TaskCurrencyCloud } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskCurrencyCloud = {
  connectorID: "<id>",
  createdAt: new Date("2023-06-08T00:51:36.478Z"),
  descriptor: {},
  id: "99f24b3d-5209-4d4e-ac09-93570226bd2c",
  state: {},
  status: PaymentStatus.DisputeLost,
  updatedAt: new Date("2024-11-27T19:05:06.518Z"),
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