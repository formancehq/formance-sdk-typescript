# TransferInitiationsCursor

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("601714"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2022-10-17T02:08:42.851Z"),
        description: "Persistent value-added policy",
        destinationAccountID: "<value>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("135548"),
        reference: "<value>",
        scheduledAt: new Date("2024-03-06T11:00:53.005Z"),
        sourceAccountID: "<value>",
        status: TransferInitiationStatus.ReverseProcessing,
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