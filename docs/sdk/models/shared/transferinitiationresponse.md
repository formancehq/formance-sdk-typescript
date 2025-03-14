# TransferInitiationResponse

OK

## Example Usage

```typescript
import { TransferInitiationResponse, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationResponse = {
  data: {
    amount: BigInt("191202"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-10-24T00:19:28.038Z"),
    description: "cloudy stunt toward ha heroine suffice the keenly",
    destinationAccountID: "<id>",
    error: "<value>",
    id: "XXX",
    initialAmount: BigInt("410916"),
    reference: "<value>",
    scheduledAt: new Date("2023-04-24T03:58:21.779Z"),
    sourceAccountID: "<id>",
    status: TransferInitiationStatus.AskRetried,
    type: TransferInitiationType.Transfer,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md) | :heavy_check_mark:                                                            | N/A                                                                           |