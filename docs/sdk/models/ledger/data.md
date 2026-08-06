# Data

The payload of the log entry. Structure depends on the log type:
- NEW_TRANSACTION: V2LogDataNewTransaction
- SET_METADATA: V2LogDataSetMetadata
- REVERTED_TRANSACTION: V2LogDataRevertedTransaction
- DELETE_METADATA: V2LogDataDeleteMetadata
- INSERTED_SCHEMA: V2LogDataInsertedSchema



## Supported Types

### `ledger.V2LogDataNewTransaction`

```typescript
const value: ledger.V2LogDataNewTransaction = {
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

### `ledger.V2LogDataSetMetadata`

```typescript
const value: ledger.V2LogDataSetMetadata = {
  metadata: {
    "status": "active",
    "tier": "premium",
  },
  targetId: "users:001",
  targetType: "ACCOUNT",
};
```

### `ledger.V2LogDataRevertedTransaction`

```typescript
const value: ledger.V2LogDataRevertedTransaction = {
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

### `ledger.V2LogDataDeleteMetadata`

```typescript
const value: ledger.V2LogDataDeleteMetadata = {
  key: "temporary_flag",
  targetId: "users:001",
  targetType: "ACCOUNT",
};
```

### `ledger.V2LogDataInsertedSchema`

```typescript
const value: ledger.V2LogDataInsertedSchema = {
  schema: {
    chart: {
      "users": {
        additionalProperties: {
          "$userID": {
            dotPattern: "^[0-9]{16}$",
          },
        },
      },
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    queries: {
      "key": {
        params: {
          resource: "transactions",
        },
      },
    },
    version: "v1.0.0",
  },
};
```

