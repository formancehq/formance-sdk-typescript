# TransferInitiationsCursor

OK

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("674548"),
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2023-10-31T15:56:54.039Z"),
        description: "immense spirit customise for",
        destinationAccountID: "<id>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("552962"),
        reference: "<value>",
        scheduledAt: new Date("2023-10-30T09:38:04.338Z"),
        sourceAccountID: "<id>",
        status: TransferInitiationStatus.AskRetried,
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