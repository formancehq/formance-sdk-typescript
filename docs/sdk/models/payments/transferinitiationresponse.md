# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationResponse = {
  data: {
    amount: 461665n,
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-07-18T07:18:18.022Z"),
    description: "inferior upwardly allegation mid oh yahoo wearily",
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 470401n,
    provider: "<value>",
    reference: "<value>",
    scheduledAt: new Date("2026-01-05T14:17:24.024Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.Rejected,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [payments.TransferInitiation](../../../sdk/models/payments/transferinitiation.md) | :heavy_check_mark:                                                                | N/A                                                                               |