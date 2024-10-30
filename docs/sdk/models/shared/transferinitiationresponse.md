# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("531606"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2023-12-13T17:06:01.103Z"),
    description: "gah newsstand truly queasily switch adjourn because",
    destinationAccountID: "<id>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("421111"),
    reference: "<value>",
    scheduledAt: new Date("2022-10-14T07:06:11.995Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.Rejected,
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |