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
        date: new Date("2024-08-27T05:15:52.024Z"),
        raw: {},
        status: V2PaymentStatus.Cancelled,
      },
    ],
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-08-16T10:24:53.845Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: Scheme.Ach,
    sourceAccountID: "<value>",
    status: V2PaymentStatus.Active,
    type: V2PaymentType.Other,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Payment](../../../sdk/models/shared/v2payment.md) | :heavy_check_mark:                                          | N/A                                                         |