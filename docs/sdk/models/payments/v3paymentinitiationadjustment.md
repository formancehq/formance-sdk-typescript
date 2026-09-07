# V3PaymentInitiationAdjustment

## Example Usage

```typescript
import { V3PaymentInitiationAdjustment } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationAdjustment = {
  createdAt: new Date("2025-04-10T01:26:00.815Z"),
  id: "<id>",
  status: "REVERSE_PROCESSING",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                | *BigInt*                                                                                                | :heavy_minus_sign:                                                                                      | Amount carried by this adjustment                                                                       |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Asset the adjustment is denominated in                                                                  |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | When the adjustment was recorded                                                                        |
| `error`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Why this step failed, absent when it succeeded                                                          |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier of the adjustment                                                                     |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | Arbitrary key/value pairs attached to the resource                                                      |
| `status`                                                                                                | [payments.V3PaymentInitiationStatusEnum](../../../sdk/models/payments/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                      | Where a payment initiation stands in its lifecycle                                                      |