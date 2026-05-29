# V3GetPaymentInitiationResponse

## Example Usage

```typescript
import {
  V3GetPaymentInitiationResponse,
  V3PaymentInitiationStatusEnum,
  V3PaymentInitiationTypeEnum,
} from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetPaymentInitiationResponse = {
  v3PaymentInitiation: {
    v3PaymentInitiationStatusEnum: V3PaymentInitiationStatusEnum.Failed,
    v3PaymentInitiationTypeEnum: V3PaymentInitiationTypeEnum.Unknown,
    amount: 110646n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2026-02-27T15:00:01.795Z"),
    description: "cruelty times trim",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    scheduledAt: new Date("2026-11-20T18:04:44.133Z"),
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `v3PaymentInitiation`                                                               | [payments.V3PaymentInitiation](../../../sdk/models/payments/v3paymentinitiation.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |