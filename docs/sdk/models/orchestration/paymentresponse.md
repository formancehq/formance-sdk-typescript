# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentResponse = {
  data: {
    adjustments: [],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-12-15T14:43:43.030Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: "ach",
    sourceAccountID: "<id>",
    status: "ACTIVE",
    type: "OTHER",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [orchestration.Payment](../../../sdk/models/orchestration/payment.md) | :heavy_check_mark:                                                    | N/A                                                                   |