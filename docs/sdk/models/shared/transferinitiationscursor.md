# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("144876"),
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2025-03-12T17:24:42.086Z"),
        description: "safely harvest victoriously tag fly",
        destinationAccountID: "<id>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("979244"),
        reference: "<value>",
        scheduledAt: new Date("2025-07-20T09:36:10.465Z"),
        sourceAccountID: "<id>",
        status: TransferInitiationStatus.PartiallyReversed,
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