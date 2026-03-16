# V2ListSchemasRequest

## Example Usage

```typescript
import { V2ListSchemasRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListSchemasRequest = {
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cursor`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The pagination cursor value                                                           |                                                                                       |
| `ledger`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | Name of the ledger.                                                                   | ledger001                                                                             |
| `order`                                                                               | [operations.V2ListSchemasOrder](../../../sdk/models/operations/v2listschemasorder.md) | :heavy_minus_sign:                                                                    | The sort order                                                                        |                                                                                       |
| `pageSize`                                                                            | *number*                                                                              | :heavy_minus_sign:                                                                    | The maximum number of results to return per page                                      |                                                                                       |
| `sort`                                                                                | [operations.Sort](../../../sdk/models/operations/sort.md)                             | :heavy_minus_sign:                                                                    | The field to sort by                                                                  |                                                                                       |