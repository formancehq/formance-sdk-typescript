# V2BulkElement


## Supported Types

### `shared.V2BulkElementAddMetadata`

```typescript
const value: shared.V2BulkElementAddMetadata = {
  action: "<value>",
};
```

### `shared.V2BulkElementCreateTransaction`

```typescript
const value: shared.V2BulkElementCreateTransaction = {
  action: "<value>",
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
      plain: "vars {\n"
        + "account $user\n"
        + "}\n"
        + "send [COIN 10] (\n"
        + "	source = @world\n"
        + "	destination = $user\n"
        + ")\n"
        + "",
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
  action: "<value>",
};
```

### `shared.V2BulkElementRevertTransaction`

```typescript
const value: shared.V2BulkElementRevertTransaction = {
  action: "<value>",
};
```

