# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentResponse = {
  payment: {
    paymentMetadata: {},
    paymentStatus: PaymentStatus.Cancelled,
    adjustments: [],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2026-05-29T13:33:48.219Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.SepaCredit,
    sourceAccountID: "<id>",
    type: PaymentType.Transfer,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `payment`                                                             | [orchestration.Payment](../../../sdk/models/orchestration/payment.md) | :heavy_check_mark:                                                    | N/A                                                                   |