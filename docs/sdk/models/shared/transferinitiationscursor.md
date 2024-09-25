# TransferInitiationsCursor

## Example Usage

```typescript
import { TransferInitiationsCursor, TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursor = {
  cursor: {
    data: [
      {
        amount: BigInt("584645"),
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2022-04-11T00:47:06.149Z"),
        description: "Phased exuding strategy",
        destinationAccountID: "<value>",
        error: "<value>",
        id: "XXX",
        initialAmount: BigInt("313099"),
        reference: "<value>",
        scheduledAt: new Date("2023-09-24T22:45:24.894Z"),
        sourceAccountID: "<value>",
        status: TransferInitiationStatus.Validated,
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