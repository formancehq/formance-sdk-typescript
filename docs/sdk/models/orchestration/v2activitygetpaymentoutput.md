# V2ActivityGetPaymentOutput

Result of the activity that reads a payment

## Example Usage

```typescript
import { V2ActivityGetPaymentOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityGetPaymentOutput = {
  data: {
    adjustments: [],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2026-06-20T02:05:25.894Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    metadata: {},
    raw: {},
    reference: "<value>",
    scheme: "ach debit",
    sourceAccountID: "<id>",
    status: "SUCCEEDED",
    type: "PAY-IN",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [orchestration.V2Payment](../../../sdk/models/orchestration/v2payment.md) | :heavy_check_mark:                                                        | A payment observed or initiated through a connector                       |