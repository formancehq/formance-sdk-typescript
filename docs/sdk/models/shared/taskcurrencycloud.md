# TaskCurrencyCloud

## Example Usage

```typescript
import { PaymentStatus, TaskCurrencyCloud } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskCurrencyCloud = {
  connectorID: "<value>",
  createdAt: new Date("2022-05-20T22:43:19.573Z"),
  descriptor: {},
  id: "59e3ea4b-5197-4f92-843d-a7ce52b895c5",
  state: {},
  status: PaymentStatus.Cancelled,
  updatedAt: new Date("2023-05-05T18:39:05.457Z"),
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