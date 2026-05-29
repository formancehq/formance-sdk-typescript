# V2RunQueryResponseBody

OK


## Supported Types

### `ledger.V2TransactionsCursorResponse`

```typescript
const value: ledger.V2TransactionsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `ledger.V2AccountsCursorResponse`

```typescript
const value: ledger.V2AccountsCursorResponse = {
  cursor: {
    data: [
      {
        v2Volumes: {
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
        v2Volumes1: {
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
        address: "users:001",
        firstUsage: new Date("2023-01-01T00:00:00Z"),
        insertionDate: new Date("2023-01-01T00:00:00Z"),
        metadata: {
          "admin": "true",
        },
        updatedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `ledger.V2LogsCursorResponse`

```typescript
const value: ledger.V2LogsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

### `ledger.V2VolumesWithBalanceCursorResponse`

```typescript
const value: ledger.V2VolumesWithBalanceCursorResponse = {
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

