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
        date: new Date("2023-09-09T00:35:13.118Z"),
        raw: {},
        status: V2PaymentStatus.Terminated,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2023-10-16T10:02:08.477Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: Scheme.SepaDebit,
    sourceAccountID: "<value>",
    status: V2PaymentStatus.Failed,
    type: V2PaymentType.Payout,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Payment](../../../sdk/models/shared/v2payment.md) | :heavy_check_mark:                                          | N/A                                                         |