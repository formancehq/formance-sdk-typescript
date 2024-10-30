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
    id: BigInt("701841"),
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
    timestamp: new Date("2022-02-03T02:11:26.549Z"),
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
    id: BigInt("873320"),
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
    timestamp: new Date("2023-05-03T03:34:27.990Z"),
  },
  responseType: "<value>",
};
```

