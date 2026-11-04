# V2BulkElementDeleteMetadata

## Example Usage

```typescript
import { V2BulkElementDeleteMetadata } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementDeleteMetadata = {
  action: "DELETE_METADATA",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                | *"DELETE_METADATA"*                                                                                     | :heavy_check_mark:                                                                                      | The bulk action this element performs                                                                   |
| `data`                                                                                                  | [ledger.V2BulkElementDeleteMetadataData](../../../sdk/models/ledger/v2bulkelementdeletemetadatadata.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `ik`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Idempotency key scoped to this element, making it safe to retry the bulk request                        |