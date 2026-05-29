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
  v2LogTransaction: {
    v2Metadata: {},
    id: 1234n,
    insertedAt: new Date("2024-01-15T10:30:00Z"),
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
  accountMetadata: {
    "users:001": {
      "created_by": "system",
    },
  },
};
```

### `ledger.V2LogDataSetMetadata`

```typescript
const value: ledger.V2LogDataSetMetadata = {
  v2Metadata: {
    "status": "active",
    "tier": "premium",
  },
  targetId: "users:001",
  targetType: V2LogDataSetMetadataTargetType.Account,
};
```

### `ledger.V2LogDataRevertedTransaction`

```typescript
const value: ledger.V2LogDataRevertedTransaction = {
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

### `ledger.V2LogDataDeleteMetadata`

```typescript
const value: ledger.V2LogDataDeleteMetadata = {
  key: "temporary_flag",
  targetId: "users:001",
  targetType: V2LogDataDeleteMetadataTargetType.Account,
};
```

### `ledger.V2LogDataInsertedSchema`

```typescript
const value: ledger.V2LogDataInsertedSchema = {
  v2SchemaData: {
    v2ChartOfAccounts: {
      "users": {
        additionalProperties: {
          "$userID": {
            dotPattern: "^[0-9]{16}$",
          },
        },
      },
    },
    v2QueryTemplates: {
      "key": {
        v2QueryParams: {
          cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
          pageSize: 100,
          sort: "id:desc",
        },
      },
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    version: "v1.0.0",
  },
};
```

