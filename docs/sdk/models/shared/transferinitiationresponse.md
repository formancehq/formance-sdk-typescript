# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("659268"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-07-12T04:59:12.983Z"),
    description: "Re-contextualized background challenge",
    destinationAccountID: "<value>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("899867"),
    reference: "<value>",
    scheduledAt: new Date("2024-03-31T01:16:59.768Z"),
    sourceAccountID: "<value>",
    status: TransferInitiationStatus.WaitingForValidation,
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |