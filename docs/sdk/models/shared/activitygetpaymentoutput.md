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
        date: new Date("2022-03-31T22:26:48.990Z"),
        raw: {},
        status: OrchestrationPaymentStatus.Pending,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2024-04-18T17:40:39.234Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: OrchestrationPaymentScheme.Mastercard,
    sourceAccountID: "<value>",
    status: OrchestrationPaymentStatus.Pending,
    type: OrchestrationPaymentType.PayIn,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationPayment](../../../sdk/models/shared/orchestrationpayment.md) | :heavy_check_mark:                                                                | N/A                                                                               |