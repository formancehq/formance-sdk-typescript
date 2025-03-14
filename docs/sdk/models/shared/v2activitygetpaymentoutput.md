# V2ActivityGetPaymentOutput

## Example Usage

```typescript
import { Scheme, V2ActivityGetPaymentOutput, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetPaymentOutput = {
  data: {
    adjustments: [
      {
        absolute: false,
        amount: BigInt("100"),
        date: new Date("2025-06-02T01:11:39.479Z"),
        raw: {},
        status: V2PaymentStatus.Succeeded,
      },
    ],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-04-07T23:00:24.273Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: Scheme.Amex,
    sourceAccountID: "<id>",
    status: V2PaymentStatus.Failed,
    type: V2PaymentType.Other,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Payment](../../../sdk/models/shared/v2payment.md) | :heavy_check_mark:                                          | N/A                                                         |