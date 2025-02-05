# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("778832"),
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2025-12-05T11:32:24.689Z"),
        description: "verbally furthermore yet minority persecute hoick",
        destinationAccountID: "<id>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("209210"),
        reference: "<value>",
        scheduledAt: new Date("2023-12-19T18:58:02.170Z"),
        sourceAccountID: "<id>",
        status: TransferInitiationStatus.WaitingForValidation,
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