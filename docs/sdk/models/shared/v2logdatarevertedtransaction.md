# V2LogDataRevertedTransaction

Payload for REVERTED_TRANSACTION log entries. Contains both the original reverted transaction and the new reverting transaction.

## Example Usage

```typescript
import { V2LogDataRevertedTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogDataRevertedTransaction = {
  revertedTransaction: {
    id: 1234n,
    metadata: {},
    postings: [
      {
        amount: 100n,
        asset: "USD/2",
        destination: "users:001",
        source: "world",
      },
    ],
    reverted: true,
    timestamp: new Date("2024-01-15T10:30:00Z"),
  },
  transaction: {
    id: 1235n,
    metadata: {
      "revert": "1234",
    },
    postings: [
      {
        amount: 100n,
        asset: "USD/2",
        destination: "world",
        source: "users:001",
      },
    ],
    reverted: false,
    timestamp: new Date("2024-01-15T11:00:00Z"),
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `revertedTransaction`                                                     | [shared.V2LogTransaction](../../../sdk/models/shared/v2logtransaction.md) | :heavy_check_mark:                                                        | Transaction structure as it appears in log payloads                       |
| `transaction`                                                             | [shared.V2LogTransaction](../../../sdk/models/shared/v2logtransaction.md) | :heavy_check_mark:                                                        | Transaction structure as it appears in log payloads                       |