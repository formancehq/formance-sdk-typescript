# TransferInitiationsCursor

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("52407"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2024-09-24T12:05:45.626Z"),
        description: "Operative 24/7 firmware",
        destinationAccountID: "<value>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("724334"),
        reference: "<value>",
        scheduledAt: new Date("2023-06-20T07:44:38.202Z"),
        sourceAccountID: "<value>",
        status: TransferInitiationStatus.Reversed,
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