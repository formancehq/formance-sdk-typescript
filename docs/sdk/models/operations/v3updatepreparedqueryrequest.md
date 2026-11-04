# V3UpdatePreparedQueryRequest

## Example Usage

```typescript
import { V3UpdatePreparedQueryRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3UpdatePreparedQueryRequest = {
  updatePreparedQueryRequest: {},
  ledgerName: "<value>",
  queryName: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `updatePreparedQueryRequest`                                                                      | [ledgerV3.UpdatePreparedQueryRequest](../../../sdk/models/ledgerV3/updatepreparedqueryrequest.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ledgerName`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | Name of the ledger                                                                                |
| `queryName`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Prepared query name, URL-encoded as one path segment. Decoded exactly once.                       |