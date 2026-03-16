# V2BulkElement


## Supported Types

### `shared.V2BulkElementAddMetadata`

```typescript
const value: shared.V2BulkElementAddMetadata = {
  action: "ADD_METADATA",
};
```

### `shared.V2BulkElementCreateTransaction`

```typescript
const value: shared.V2BulkElementCreateTransaction = {
  action: "CREATE_TRANSACTION",
  data: {
    accountMetadata: {
      "key": {
        "admin": "true",
      },
    },
    metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    script: {
      plain:
        "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
      template: "CUSTOMER_DEPOSIT",
      vars: {
        "user": "users:042",
      },
    },
  },
};
```

### `shared.V2BulkElementDeleteMetadata`

```typescript
const value: shared.V2BulkElementDeleteMetadata = {
  action: "DELETE_METADATA",
};
```

### `shared.V2BulkElementRevertTransaction`

```typescript
const value: shared.V2BulkElementRevertTransaction = {
  action: "REVERT_TRANSACTION",
  data: {
    id: 532442n,
    metadata: {
      "admin": "true",
    },
  },
};
```

