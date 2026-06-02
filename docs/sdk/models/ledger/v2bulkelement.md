# V2BulkElement


## Supported Types

### `ledger.V2BulkElementCreateTransaction`

```typescript
const value: ledger.V2BulkElementCreateTransaction = {
  action: "<value>",
  data: {
    accountMetadata: {
      "key": {
        "admin": "true",
      },
      "key1": {
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

### `ledger.V2BulkElementAddMetadata`

```typescript
const value: ledger.V2BulkElementAddMetadata = {
  action: "<value>",
};
```

### `ledger.V2BulkElementRevertTransaction`

```typescript
const value: ledger.V2BulkElementRevertTransaction = {
  action: "<value>",
  data: {
    id: 206224n,
    metadata: {
      "admin": "true",
    },
  },
};
```

### `ledger.V2BulkElementDeleteMetadata`

```typescript
const value: ledger.V2BulkElementDeleteMetadata = {
  action: "<value>",
};
```

