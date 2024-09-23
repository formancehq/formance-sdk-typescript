# TransferInitiationsCursor

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("481102"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2022-10-03T16:03:14.777Z"),
        description: "Synergized eco-centric system engine",
        destinationAccountID: "<value>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("974788"),
        reference: "<value>",
        scheduledAt: new Date("2023-05-09T01:09:28.036Z"),
        sourceAccountID: "<value>",
        status: TransferInitiationStatus.Processed,
        type: TransferInitiationType.Transfer,
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