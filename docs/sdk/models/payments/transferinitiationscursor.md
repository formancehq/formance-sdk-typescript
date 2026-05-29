# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationsCursor = {
  cursorBase: {
    data: [
      {
        transferInitiationStatus: TransferInitiationStatus.ReverseProcessing,
        amount: 876900n,
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2024-10-03T23:50:43.293Z"),
        description:
          "unexpectedly well-to-do ouch recklessly healthily salty noon",
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 392637n,
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2026-03-18T06:40:24.098Z"),
        sourceAccountID: "<id>",
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

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `cursorBase`                                                                                                        | [payments.TransferInitiationsCursorCursorBase](../../../sdk/models/payments/transferinitiationscursorcursorbase.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |