# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("458503"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2023-02-04T10:49:35.175Z"),
    description: "Monitored multi-tasking flexibility",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("571844"),
    reference: "<value>",
    scheduledAt: new Date("2024-08-23T05:21:26.240Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.ReverseFailed,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |