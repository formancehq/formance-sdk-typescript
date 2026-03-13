# V2BulkElementResult


## Supported Types

### `shared.V2BulkElementResultAddMetadata`

```typescript
const value: shared.V2BulkElementResultAddMetadata = {
  logID: 934456,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultCreateTransaction`

```typescript
const value: shared.V2BulkElementResultCreateTransaction = {
  data: {
    id: 126928n,
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
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
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
    reverted: true,
    timestamp: new Date("2026-12-06T01:08:16.380Z"),
  },
  logID: 778245,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultDeleteMetadata`

```typescript
const value: shared.V2BulkElementResultDeleteMetadata = {
  logID: 699342,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultError`

```typescript
const value: shared.V2BulkElementResultError = {
  errorCode: "<value>",
  errorDescription: "<value>",
  logID: 332853,
  responseType: "<value>",
};
```

### `shared.V2BulkElementResultRevertTransaction`

```typescript
const value: shared.V2BulkElementResultRevertTransaction = {
  data: {
    id: 126928n,
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
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
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
    reverted: true,
    timestamp: new Date("2026-12-06T01:08:16.380Z"),
  },
  logID: 96956,
  responseType: "<value>",
};
```

