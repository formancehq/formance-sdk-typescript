# V3PaymentInitiationAdjustment

## Example Usage

```typescript
import { V3PaymentInitiationAdjustment, V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationAdjustment = {
  createdAt: new Date("2024-02-27T18:10:37.714Z"),
  id: "<id>",
  status: V3PaymentInitiationStatusEnum.Processing,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `asset`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [shared.V3PaymentInitiationStatusEnum](../../../sdk/models/shared/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |