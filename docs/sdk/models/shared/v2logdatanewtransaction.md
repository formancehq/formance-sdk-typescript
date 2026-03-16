# V2LogDataNewTransaction

Payload for NEW_TRANSACTION log entries. Contains the created transaction and any account metadata set during creation.

## Example Usage

```typescript
import { V2LogDataNewTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogDataNewTransaction = {
  accountMetadata: {
    "users:001": {
      "created_by": "system",
    },
  },
  transaction: {
    id: 1234n,
    insertedAt: new Date("2024-01-15T10:30:00Z"),
    metadata: {},
    postings: [
      {
        amount: 100n,
        asset: "USD/2",
        destination: "users:001",
        source: "world",
      },
    ],
    reverted: false,
    timestamp: new Date("2024-01-15T10:30:00Z"),
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accountMetadata`                                                         | Record<string, Record<string, *string*>>                                  | :heavy_check_mark:                                                        | Metadata applied to accounts involved in the transaction                  |
| `transaction`                                                             | [shared.V2LogTransaction](../../../sdk/models/shared/v2logtransaction.md) | :heavy_check_mark:                                                        | Transaction structure as it appears in log payloads                       |