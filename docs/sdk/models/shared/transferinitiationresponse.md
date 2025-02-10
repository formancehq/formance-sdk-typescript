# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("526322"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-05-30T22:08:18.974Z"),
    description: "because cool woot",
    destinationAccountID: "<id>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("806952"),
    reference: "<value>",
    scheduledAt: new Date("2025-02-26T19:43:42.467Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.Reversed,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |