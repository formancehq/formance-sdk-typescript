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
        date: new Date("2023-05-16T22:28:24.854Z"),
        raw: {},
        status: V2PaymentStatus.Failed,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2024-12-10T00:55:43.900Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: Scheme.Other,
    sourceAccountID: "<value>",
    status: V2PaymentStatus.Terminated,
    type: V2PaymentType.PayIn,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Payment](../../../sdk/models/shared/v2payment.md) | :heavy_check_mark:                                          | N/A                                                         |