# PreparedQueryFilterInput

A filter supplied to a prepared-query create/update request, accepted in EITHER of two interchangeable representations that parse to the same filter and are validated against the same per-target rules (EN-1511):

- the structured JSON QueryFilter object (see `QueryFilter`); or
- the textual filter grammar carried as a JSON string, e.g.


  `"metadata[status] == \"active\""`.


`null` represents a match-all query. An empty object and an empty or whitespace-only textual expression are invalid. Responses echo a stored non-null filter in the structured `QueryFilter` form and omit this field for match-all queries.


## Supported Types

### `ledgerV3.QueryFilter`

```typescript
const value: ledgerV3.QueryFilter = {};
```

### `string`

```typescript
const value: string = "<value>";
```

