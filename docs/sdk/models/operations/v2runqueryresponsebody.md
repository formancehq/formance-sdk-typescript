# V2RunQueryResponseBody

OK


## Supported Types

### `shared.V2TransactionsCursorResponse`

```typescript
const value: shared.V2TransactionsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `shared.V2AccountsCursorResponse`

```typescript
const value: shared.V2AccountsCursorResponse = {
  cursor: {
    data: [
      {
        address: "users:001",
        effectiveVolumes: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        firstUsage: new Date("2023-01-01T00:00:00Z"),
        insertionDate: new Date("2023-01-01T00:00:00Z"),
        metadata: {
          "admin": "true",
        },
        updatedAt: new Date("2023-01-01T00:00:00Z"),
        volumes: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
      },
    ],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `shared.V2LogsCursorResponse`

```typescript
const value: shared.V2LogsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `shared.V2VolumesWithBalanceCursorResponse`

```typescript
const value: shared.V2VolumesWithBalanceCursorResponse = {
  cursor: {
    data: [
      {
        account: "93337908",
        asset: "<value>",
        balance: 75433n,
        input: 396749n,
        output: 124814n,
      },
    ],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

