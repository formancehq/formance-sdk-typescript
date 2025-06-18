# V2BulkElementAddMetadataData

## Example Usage

```typescript
import { V2BulkElementAddMetadataData, V2TargetType } from "@formance/formance-sdk/sdk/models/shared";

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
| `targetId`                                                        | *shared.V2TargetId*                                               | :heavy_check_mark:                                                | N/A                                                               |
| `targetType`                                                      | [shared.V2TargetType](../../../sdk/models/shared/v2targettype.md) | :heavy_check_mark:                                                | N/A                                                               |