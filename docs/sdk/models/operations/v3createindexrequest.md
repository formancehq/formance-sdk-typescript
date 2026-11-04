# V3CreateIndexRequest

## Example Usage

```typescript
import { V3CreateIndexRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3CreateIndexRequest = {
  requestBody: {
    id: "metadata:TARGET_TYPE_ACCOUNT:color",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `requestBody`                                                                                     | [operations.V3CreateIndexRequestBody](../../../sdk/models/operations/v3createindexrequestbody.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ledgerName`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | Name of the ledger                                                                                |