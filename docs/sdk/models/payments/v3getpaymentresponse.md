# V3GetPaymentResponse

## Example Usage

```typescript
import { V3GetPaymentResponse, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetPaymentResponse = {
  v3Payment: {
    v3PaymentStatusEnum: V3PaymentStatusEnum.Failed,
    v3PaymentTypeEnum: V3PaymentTypeEnum.Payout,
    amount: 121784n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2024-07-31T20:31:17.047Z"),
    id: "<id>",
    initialAmount: 615672n,
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `v3Payment`                                                     | [payments.V3Payment](../../../sdk/models/payments/v3payment.md) | :heavy_check_mark:                                              | N/A                                                             |