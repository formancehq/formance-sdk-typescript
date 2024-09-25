# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("512349"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2023-05-17T23:47:00.287Z"),
    description: "Optimized next generation synergy",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("617035"),
    reference: "<value>",
    scheduledAt: new Date("2024-08-31T01:35:36.933Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.ReverseProcessing,
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |