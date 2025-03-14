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
      amount: BigInt("646629"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2025-04-23T20:01:53.080Z"),
      description: "yippee unfurl tenderly outside meaningfully bourgeoisie",
      destinationAccountID: "<id>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("220455"),
      reference: "<value>",
      scheduledAt: new Date("2023-10-01T11:56:46.049Z"),
      sourceAccountID: "<id>",
      status: TransferInitiationStatus.Processed,
      type: TransferInitiationType.Transfer,
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