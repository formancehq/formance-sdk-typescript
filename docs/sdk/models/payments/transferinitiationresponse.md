# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationResponse = {
  transferInitiation: {
    transferInitiationStatus: TransferInitiationStatus.Validated,
    amount: 514876n,
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-07-28T06:54:28.449Z"),
    description:
      "bandwidth stage dearly waver singing brr gah through aha construe",
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 15182n,
    provider: null,
    reference: "<value>",
    scheduledAt: new Date("2025-05-26T00:58:08.174Z"),
    sourceAccountID: "<id>",
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `transferInitiation`                                                              | [payments.TransferInitiation](../../../sdk/models/payments/transferinitiation.md) | :heavy_check_mark:                                                                | N/A                                                                               |