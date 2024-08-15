# TransferInitiationResponse

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
    data: {
        amount: BigInt("858778"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2023-12-07T11:18:30.114Z"),
        description: "Multi-channelled executive hierarchy",
        destinationAccountID: "<value>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("667715"),
        reference: "<value>",
        scheduledAt: new Date("2023-01-04T08:50:02.647Z"),
        sourceAccountID: "<value>",
        status: TransferInitiationStatus.AskRetried,
        type: TransferInitiationType.Payout,
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |