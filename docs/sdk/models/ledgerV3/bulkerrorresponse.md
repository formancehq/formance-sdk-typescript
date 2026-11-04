# BulkErrorResponse

Bulk processing returns per-element outcomes in data, including any
preceding successes and subsequent aborted elements. Failures before
processing and panic recovery can return only errorCode/errorMessage.
These object shapes overlap: use a non-exclusive union and preserve
the bulk fields when decoding a processing failure.



## Supported Types

### `ledgerV3.BulkResponse`

```typescript
const value: ledgerV3.BulkResponse = {};
```

### `ledgerV3.ErrorResponse`

```typescript
const value: ledgerV3.ErrorResponse = {
  errorCode: "<value>",
  errorMessage: "<value>",
};
```

