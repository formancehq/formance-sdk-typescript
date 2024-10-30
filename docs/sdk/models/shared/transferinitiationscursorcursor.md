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
      amount: BigInt("115281"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2023-02-17T02:45:35.925Z"),
      description: "dishearten until duh",
      destinationAccountID: "<id>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("632532"),
      reference: "<value>",
      scheduledAt: new Date("2024-01-08T01:33:43.602Z"),
      sourceAccountID: "<id>",
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