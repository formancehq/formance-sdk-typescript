# V3GetPaymentResponse

## Example Usage

```typescript
import { V3GetPaymentResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetPaymentResponse = {
  data: {
    amount: 241792n,
    asset: "<value>",
    connectorID: "<value>",
    createdAt: new Date("2025-03-21T20:04:47.256Z"),
    id: "<id>",
    initialAmount: 121784n,
    provider: "<value>",
    reference: "<value>",
    scheme: "<value>",
    status: "CANCELLED",
    type: "TRANSFER",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [payments.V3Payment](../../../sdk/models/payments/v3payment.md)   | :heavy_check_mark:                                                | A payment observed at a provider and surfaced through a connector |