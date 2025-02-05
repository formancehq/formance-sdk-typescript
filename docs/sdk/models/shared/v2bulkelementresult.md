# V2BulkElementResult


## Supported Types

### `shared.Schemas`

```typescript
const value: shared.Schemas = {
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultCreateTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultCreateTransactionSchemas = {
  data: {
    id: BigInt("139745"),
    metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2023-12-29T08:00:18.342Z"),
  },
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultDeleteMetadataSchemas`

```typescript
const value: shared.V2BulkElementResultDeleteMetadataSchemas = {
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultErrorSchemas`

```typescript
const value: shared.V2BulkElementResultErrorSchemas = {
  errorCode: "<value>",
  errorDescription: "<value>",
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultRevertTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultRevertTransactionSchemas = {
  data: {
    id: BigInt("51053"),
    metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2023-12-30T01:41:47.858Z"),
  },
  responseType: "<value>",
};
```

