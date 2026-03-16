# V2BulkElementResult


## Supported Types

### `shared.V2BulkElementResultAddMetadata`

```typescript
const value: shared.V2BulkElementResultAddMetadata = {
  logID: 934456,
  responseType: "ADD_METADATA",
};
```

### `shared.V2BulkElementResultCreateTransaction`

```typescript
const value: shared.V2BulkElementResultCreateTransaction = {
  data: {
    id: 712930n,
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postings: [],
    preCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2024-01-30T18:49:02.529Z"),
  },
  logID: 778245,
  responseType: "CREATE_TRANSACTION",
};
```

### `shared.V2BulkElementResultDeleteMetadata`

```typescript
const value: shared.V2BulkElementResultDeleteMetadata = {
  logID: 699342,
  responseType: "DELETE_METADATA",
};
```

### `shared.V2BulkElementResultError`

```typescript
const value: shared.V2BulkElementResultError = {
  errorCode: "<value>",
  errorDescription: "<value>",
  logID: 332853,
  responseType: "ERROR",
};
```

### `shared.V2BulkElementResultRevertTransaction`

```typescript
const value: shared.V2BulkElementResultRevertTransaction = {
  data: {
    id: 712930n,
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postings: [],
    preCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2024-01-30T18:49:02.529Z"),
  },
  logID: 96956,
  responseType: "REVERT_TRANSACTION",
};
```

