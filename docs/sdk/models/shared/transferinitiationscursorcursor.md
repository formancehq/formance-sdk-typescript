# TransferInitiationsCursorCursor

## Example Usage

```typescript
import {
  TransferInitiationsCursorCursor,
  TransferInitiationStatus,
  TransferInitiationType,
} from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationsCursorCursor = {
  data: [
    {
      amount: BigInt("923879"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-06-12T12:17:54.368Z"),
      description: "Public-key responsive instruction set",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("294316"),
      reference: "<value>",
      scheduledAt: new Date("2023-12-01T08:10:38.131Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.AskReversed,
      type: TransferInitiationType.Payout,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.TransferInitiation](../../../sdk/models/shared/transferinitiation.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             | false                                                                           |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `pageSize`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 15                                                                              |
| `previous`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                    |