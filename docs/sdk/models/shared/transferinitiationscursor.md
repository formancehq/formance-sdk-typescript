# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("620421"),
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2024-08-07T15:17:18.675Z"),
        description:
          "helpfully chasuble defiantly rightfully behind tuxedo enchanting free humidity",
        destinationAccountID: "<id>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("208224"),
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2024-08-29T01:07:14.865Z"),
        sourceAccountID: "<id>",
        status: TransferInitiationStatus.Failed,
        type: TransferInitiationType.Payout,
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                | [shared.TransferInitiationsCursorCursor](../../../sdk/models/shared/transferinitiationscursorcursor.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |