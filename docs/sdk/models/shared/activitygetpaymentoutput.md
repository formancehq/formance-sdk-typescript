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
        date: new Date("2022-01-30T01:38:57.072Z"),
        raw: {},
        status: OrchestrationPaymentStatus.Succeeded,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2023-11-17T16:44:44.127Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: OrchestrationPaymentScheme.Unionpay,
    sourceAccountID: "<value>",
    status: OrchestrationPaymentStatus.Active,
    type: OrchestrationPaymentType.Other,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationPayment](../../../sdk/models/shared/orchestrationpayment.md) | :heavy_check_mark:                                                                | N/A                                                                               |