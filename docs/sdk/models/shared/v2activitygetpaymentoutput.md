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
        date: new Date("2023-11-27T17:25:10.266Z"),
        raw: {},
        status: V2PaymentStatus.Pending,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2024-11-17T05:16:39.880Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: Scheme.Unknown,
    sourceAccountID: "<value>",
    status: V2PaymentStatus.Pending,
    type: V2PaymentType.Transfer,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Payment](../../../sdk/models/shared/v2payment.md) | :heavy_check_mark:                                          | N/A                                                         |