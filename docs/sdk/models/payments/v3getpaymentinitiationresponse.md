# V3GetPaymentInitiationResponse

## Example Usage

```typescript
import { V3GetPaymentInitiationResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetPaymentInitiationResponse = {
  data: {
    amount: 582036n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2024-03-23T10:08:14.033Z"),
    description: "vaguely row hello",
    id: "<id>",
    provider: "<value>",
    reference: "<value>",
    scheduledAt: new Date("2026-02-05T06:41:14.397Z"),
    status: "REVERSE_FAILED",
    type: "PAYOUT",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [payments.V3PaymentInitiation](../../../sdk/models/payments/v3paymentinitiation.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |