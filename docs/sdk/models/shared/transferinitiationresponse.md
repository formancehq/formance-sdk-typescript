# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("376389"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-10-06T09:52:46.603Z"),
    description: "Horizontal intermediate data-warehouse",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("131903"),
    reference: "<value>",
    scheduledAt: new Date("2023-06-28T14:00:09.683Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.Processed,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |