# V3PaymentInitiationAdjustment

## Example Usage

```typescript
import { V3PaymentInitiationAdjustment, V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationAdjustment = {
  v3PaymentInitiationStatusEnum: V3PaymentInitiationStatusEnum.Processed,
  createdAt: new Date("2026-02-09T09:41:16.029Z"),
  id: "<id>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                            | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `v3PaymentInitiationStatusEnum`                                                                         | [payments.V3PaymentInitiationStatusEnum](../../../sdk/models/payments/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `amount`                                                                                                | *BigInt*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `error`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |