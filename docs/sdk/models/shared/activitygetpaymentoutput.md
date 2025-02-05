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
        date: new Date("2023-08-31T18:04:39.587Z"),
        raw: {},
        status: OrchestrationPaymentStatus.Pending,
      },
    ],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-04-17T15:48:23.052Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: OrchestrationPaymentScheme.A2a,
    sourceAccountID: "<id>",
    status: OrchestrationPaymentStatus.Succeeded,
    type: OrchestrationPaymentType.Other,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationPayment](../../../sdk/models/shared/orchestrationpayment.md) | :heavy_check_mark:                                                                | N/A                                                                               |