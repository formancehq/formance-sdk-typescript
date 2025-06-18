# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: 746822n,
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2025-08-19T01:57:28.483Z"),
        description: "acidly silky psst consequently burgeon",
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 318776n,
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2025-02-25T06:58:15.455Z"),
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