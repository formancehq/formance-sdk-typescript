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
        date: new Date("2023-02-01T02:03:31.039Z"),
        raw: {},
        status: OrchestrationPaymentStatus.Failed,
      },
    ],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-08-16T05:08:02.805Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: OrchestrationPaymentScheme.A2a,
    sourceAccountID: "<id>",
    status: OrchestrationPaymentStatus.Failed,
    type: OrchestrationPaymentType.Other,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationPayment](../../../sdk/models/shared/orchestrationpayment.md) | :heavy_check_mark:                                                                | N/A                                                                               |