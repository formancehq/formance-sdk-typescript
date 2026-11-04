# UpdatePreparedQueryRequest

## Example Usage

```typescript
import { UpdatePreparedQueryRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdatePreparedQueryRequest = {
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