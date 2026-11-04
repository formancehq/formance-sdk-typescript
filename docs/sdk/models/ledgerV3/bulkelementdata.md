# BulkElementData

Operation-specific data


## Supported Types

### `ledgerV3.CreateTransactionRequest`

```typescript
const value: ledgerV3.CreateTransactionRequest = {};
```

### `ledgerV3.AddMetadataRequest`

```typescript
const value: ledgerV3.AddMetadataRequest = {
  metadata: {
    "key": 415592,
  },
  targetId: 210611,
  targetType: "TRANSACTION",
};
```

### `ledgerV3.RevertTransactionRequest`

```typescript
const value: ledgerV3.RevertTransactionRequest = {
  id: 996548,
};
```

### `ledgerV3.DeleteMetadataRequest`

```typescript
const value: ledgerV3.DeleteMetadataRequest = {
  key: "<key>",
  targetId: "<id>",
  targetType: "TRANSACTION",
};
```

