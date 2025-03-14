# ActivityGetPaymentOutput

## Example Usage

```typescript
import {
  ActivityGetPaymentOutput,
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
} from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetPaymentOutput = {
  data: {
    adjustments: [
      {
        absolute: false,
        amount: BigInt("100"),
        date: new Date("2025-05-14T18:51:09.710Z"),
        raw: {},
        status: OrchestrationPaymentStatus.Pending,
      },
    ],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-07-09T15:47:57.182Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: OrchestrationPaymentScheme.GooglePay,
    sourceAccountID: "<id>",
    status: OrchestrationPaymentStatus.Pending,
    type: OrchestrationPaymentType.Other,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationPayment](../../../sdk/models/shared/orchestrationpayment.md) | :heavy_check_mark:                                                                | N/A                                                                               |