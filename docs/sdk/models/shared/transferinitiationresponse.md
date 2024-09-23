# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("237972"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2024-04-15T01:42:53.846Z"),
    description: "Total scalable archive",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("9060"),
    reference: "<value>",
    scheduledAt: new Date("2022-07-30T03:06:39.554Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.Failed,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |