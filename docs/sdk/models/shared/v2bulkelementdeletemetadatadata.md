# V2BulkElementDeleteMetadataData

## Example Usage

```typescript
import { V2BulkElementDeleteMetadataData, V2TargetType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementDeleteMetadataData = {
  key: "<key>",
  targetId: "<id>",
  targetType: V2TargetType.Transaction,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `key`                                                             | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `targetId`                                                        | *shared.V2TargetId*                                               | :heavy_check_mark:                                                | N/A                                                               |
| `targetType`                                                      | [shared.V2TargetType](../../../sdk/models/shared/v2targettype.md) | :heavy_check_mark:                                                | N/A                                                               |