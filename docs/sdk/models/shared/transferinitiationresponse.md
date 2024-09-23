# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("502509"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-02-01T02:03:31.039Z"),
    description: "Optional systemic orchestration",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("622968"),
    reference: "<value>",
    scheduledAt: new Date("2024-11-13T17:37:04.407Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.Reversed,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |