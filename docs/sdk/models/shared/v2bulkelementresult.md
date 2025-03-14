# V2BulkElementResult


## Supported Types

### `shared.Schemas`

```typescript
const value: shared.Schemas = {
  logID: 944033,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultCreateTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultCreateTransactionSchemas = {
  data: {
    id: BigInt("36691"),
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    preCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2023-06-11T13:12:44.267Z"),
  },
  logID: 756287,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultDeleteMetadataSchemas`

```typescript
const value: shared.V2BulkElementResultDeleteMetadataSchemas = {
  logID: 83791,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultErrorSchemas`

```typescript
const value: shared.V2BulkElementResultErrorSchemas = {
  errorCode: "<value>",
  errorDescription: "<value>",
  logID: 516124,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultRevertTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultRevertTransactionSchemas = {
  data: {
    id: BigInt("219860"),
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    preCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2023-10-28T15:04:27.098Z"),
  },
  logID: 701841,
  responseType: "<value>",
};
```

