# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("774866"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2023-02-03T04:42:22.826Z"),
    description: "why absentmindedly vaguely roughly broadcast under",
    destinationAccountID: "<id>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("253916"),
    reference: "<value>",
    scheduledAt: new Date("2023-03-28T08:49:02.228Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.ReverseProcessing,
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |