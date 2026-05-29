# V2LogDataRevertedTransaction

Payload for REVERTED_TRANSACTION log entries. Contains both the original reverted transaction and the new reverting transaction.

## Example Usage

```typescript
import { V2LogDataRevertedTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LogDataRevertedTransaction = {
  v2LogTransaction: {
    v2Metadata: {},
    id: 1234n,
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
  v2LogTransaction1: {
    v2Metadata: {
      "revert": "1234",
    },
    id: 1235n,
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
| `v2LogTransaction`                                                        | [ledger.V2LogTransaction](../../../sdk/models/ledger/v2logtransaction.md) | :heavy_check_mark:                                                        | Transaction structure as it appears in log payloads                       |
| `v2LogTransaction1`                                                       | [ledger.V2LogTransaction](../../../sdk/models/ledger/v2logtransaction.md) | :heavy_check_mark:                                                        | Transaction structure as it appears in log payloads                       |