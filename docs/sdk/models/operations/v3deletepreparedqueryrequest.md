# V3DeletePreparedQueryRequest

## Example Usage

```typescript
import { V3DeletePreparedQueryRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3DeletePreparedQueryRequest = {
  ledgerName: "<value>",
  queryName: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ledgerName`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | Name of the ledger                                                          |
| `queryName`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Prepared query name, URL-encoded as one path segment. Decoded exactly once. |