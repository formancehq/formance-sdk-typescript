# V2LogDataDeleteMetadata

Payload for DELETE_METADATA log entries. Contains the target entity and the metadata key that was deleted.

## Example Usage

```typescript
import { V2LogDataDeleteMetadata, V2LogDataDeleteMetadataTargetType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogDataDeleteMetadata = {
  key: "temporary_flag",
  targetId: "users:001",
  targetType: V2LogDataDeleteMetadataTargetType.Account,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The metadata key that was deleted                                                                           |
| `targetId`                                                                                                  | *shared.V2LogDataDeleteMetadataTargetId*                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `targetType`                                                                                                | [shared.V2LogDataDeleteMetadataTargetType](../../../sdk/models/shared/v2logdatadeletemetadatatargettype.md) | :heavy_check_mark:                                                                                          | Type of the target entity                                                                                   |