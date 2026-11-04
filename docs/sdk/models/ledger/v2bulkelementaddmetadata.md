# V2BulkElementAddMetadata

## Example Usage

```typescript
import { V2BulkElementAddMetadata } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementAddMetadata = {
  action: "ADD_METADATA",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `action`                                                                                          | *"ADD_METADATA"*                                                                                  | :heavy_check_mark:                                                                                | The bulk action this element performs                                                             |
| `data`                                                                                            | [ledger.V2BulkElementAddMetadataData](../../../sdk/models/ledger/v2bulkelementaddmetadatadata.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `ik`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Idempotency key scoped to this element, making it safe to retry the bulk request                  |