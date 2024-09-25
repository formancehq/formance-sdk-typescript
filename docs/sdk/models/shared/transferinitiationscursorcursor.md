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
      amount: BigInt("656939"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-02-02T10:37:12.717Z"),
      description: "Multi-tiered needs-based secured line",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("149941"),
      reference: "<value>",
      scheduledAt: new Date("2024-04-06T11:35:34.778Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.ReverseProcessing,
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