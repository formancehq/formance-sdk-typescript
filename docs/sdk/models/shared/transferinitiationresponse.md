# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("178066"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-12-02T08:02:45.129Z"),
    description: "yawningly limp as uncover sleepily",
    destinationAccountID: "<id>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("424505"),
    reference: "<value>",
    scheduledAt: new Date("2025-06-03T10:02:48.006Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.ReverseProcessing,
    type: TransferInitiationType.Payout,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |