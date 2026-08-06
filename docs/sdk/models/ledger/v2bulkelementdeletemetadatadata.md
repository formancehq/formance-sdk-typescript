# V2BulkElementDeleteMetadataData

## Example Usage

```typescript
import { V2BulkElementDeleteMetadataData } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementDeleteMetadataData = {
  key: "<key>",
  targetId: "<id>",
  targetType: "ACCOUNT",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `key`                                                             | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `targetId`                                                        | *ledger.V2TargetId*                                               | :heavy_check_mark:                                                | N/A                                                               |
| `targetType`                                                      | [ledger.V2TargetType](../../../sdk/models/ledger/v2targettype.md) | :heavy_check_mark:                                                | N/A                                                               |