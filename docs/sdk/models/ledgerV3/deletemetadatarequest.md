# DeleteMetadataRequest

## Example Usage

```typescript
import { DeleteMetadataRequest } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: DeleteMetadataRequest = {
  key: "<key>",
  targetId: "<id>",
  targetType: "TRANSACTION",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Metadata key to delete                                                                                      |
| `targetId`                                                                                                  | *ledgerV3.DeleteMetadataRequestTargetId*                                                                    | :heavy_check_mark:                                                                                          | ID of the target (account address or transaction ID). Required.<br/>                                        |
| `targetType`                                                                                                | [ledgerV3.DeleteMetadataRequestTargetType](../../../sdk/models/ledgerV3/deletemetadatarequesttargettype.md) | :heavy_check_mark:                                                                                          | Type of target (account or transaction)                                                                     |