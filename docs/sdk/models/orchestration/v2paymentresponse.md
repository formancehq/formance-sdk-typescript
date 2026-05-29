# V2PaymentResponse

## Example Usage

```typescript
import { V2PaymentResponse, V2PaymentScheme, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2PaymentResponse = {
  v2Payment: {
    v2PaymentMetadata: {},
    v2PaymentStatus: V2PaymentStatus.Failed,
    adjustments: [],
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2026-02-11T04:04:45.176Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    raw: {},
    reference: "<value>",
    scheme: V2PaymentScheme.AchDebit,
    sourceAccountID: "<id>",
    type: V2PaymentType.Transfer,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `v2Payment`                                                               | [orchestration.V2Payment](../../../sdk/models/orchestration/v2payment.md) | :heavy_check_mark:                                                        | N/A                                                                       |