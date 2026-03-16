# V2LogDataSetMetadata

Payload for SET_METADATA log entries. Contains the target entity and the metadata that was set.

## Example Usage

```typescript
import { V2LogDataSetMetadata, V2LogDataSetMetadataTargetType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogDataSetMetadata = {
  metadata: {
    "status": "active",
    "tier": "premium",
  },
  targetId: "users:001",
  targetType: V2LogDataSetMetadataTargetType.Account,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                            | Record<string, *string*>                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | {<br/>"admin": "true"<br/>}                                                                           |
| `targetId`                                                                                            | *shared.V2LogDataSetMetadataTargetId*                                                                 | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `targetType`                                                                                          | [shared.V2LogDataSetMetadataTargetType](../../../sdk/models/shared/v2logdatasetmetadatatargettype.md) | :heavy_check_mark:                                                                                    | Type of the target entity                                                                             |                                                                                                       |