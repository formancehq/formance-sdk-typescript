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
      amount: BigInt("622789"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2024-07-07T16:43:27.039Z"),
      description: "Upgradable bifurcated core",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("427461"),
      reference: "<value>",
      scheduledAt: new Date("2022-01-01T23:45:36.080Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.WaitingForValidation,
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