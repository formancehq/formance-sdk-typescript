# V2LogDataSetMetadata

Payload for SET_METADATA log entries. Contains the target entity and the metadata that was set.

## Example Usage

```typescript
import { V2LogDataSetMetadata } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LogDataSetMetadata = {
  metadata: {
    "status": "active",
    "tier": "premium",
  },
  targetId: "users:001",
  targetType: "ACCOUNT",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                            | Record<string, *string*>                                                                              | :heavy_check_mark:                                                                                    | Arbitrary key/value pairs attached to the resource                                                    | {<br/>"admin": "true"<br/>}                                                                           |
| `targetId`                                                                                            | *ledger.V2LogDataSetMetadataTargetId*                                                                 | :heavy_check_mark:                                                                                    | Identifier of the entity the metadata was set on, either an account address or a transaction ID       |                                                                                                       |
| `targetType`                                                                                          | [ledger.V2LogDataSetMetadataTargetType](../../../sdk/models/ledger/v2logdatasetmetadatatargettype.md) | :heavy_check_mark:                                                                                    | Type of the target entity                                                                             |                                                                                                       |