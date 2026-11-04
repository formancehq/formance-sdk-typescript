# CreateIndexRequest

## Example Usage

```typescript
import { CreateIndexRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateIndexRequest = {
  requestBody: {
    id: "metadata:TARGET_TYPE_ACCOUNT:color",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `requestBody`                                                                                 | [operations.CreateIndexRequestBody](../../../sdk/models/operations/createindexrequestbody.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ledgerName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger                                                                            |