# V2BulkElementAddMetadataData

## Example Usage

```typescript
import { V2BulkElementAddMetadataData, V2TargetType } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementAddMetadataData = {
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  targetId: 350871n,
  targetType: V2TargetType.Transaction,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `metadata`                                                        | Record<string, *string*>                                          | :heavy_check_mark:                                                | N/A                                                               |
| `targetId`                                                        | *ledger.V2TargetId*                                               | :heavy_check_mark:                                                | N/A                                                               |
| `targetType`                                                      | [ledger.V2TargetType](../../../sdk/models/ledger/v2targettype.md) | :heavy_check_mark:                                                | N/A                                                               |