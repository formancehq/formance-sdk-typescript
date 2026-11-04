# AccountTypeInfo

## Example Usage

```typescript
import { AccountTypeInfo } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AccountTypeInfo = {
  name: "<value>",
  pattern: "<value>",
  persistence: "EPHEMERAL",
  segmentTypes: {
    "key": {
      regex: "[A-Z]{2}[0-9]{14}",
      type: "uint64",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | Account type name                                                                                 |
| `pattern`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | Account address pattern                                                                           |
| `persistence`                                                                                     | [ledgerV3.AccountTypeInfoPersistence](../../../sdk/models/ledgerV3/accounttypeinfopersistence.md) | :heavy_check_mark:                                                                                | How account volumes are stored (NORMAL, EPHEMERAL, or TRANSIENT)                                  |
| `segmentTypes`                                                                                    | Record<string, [ledgerV3.SegmentType](../../../sdk/models/ledgerV3/segmenttype.md)>               | :heavy_minus_sign:                                                                                | Maps a pattern variable name to a type constraint.                                                |