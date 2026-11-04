# MetadataFieldTypeCommand

Declares the type of a metadata field, seeding a ledger's initial metadata schema.

## Example Usage

```typescript
import { MetadataFieldTypeCommand } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MetadataFieldTypeCommand = {
  key: "color",
  targetType: "transaction",
  type: "string",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Metadata key.                                                                                                     | color                                                                                                             |
| `targetType`                                                                                                      | [ledgerV3.MetadataFieldTypeCommandTargetType](../../../sdk/models/ledgerV3/metadatafieldtypecommandtargettype.md) | :heavy_check_mark:                                                                                                | Which entity the metadata field applies to.                                                                       |                                                                                                                   |
| `type`                                                                                                            | [ledgerV3.MetadataFieldTypeCommandType](../../../sdk/models/ledgerV3/metadatafieldtypecommandtype.md)             | :heavy_check_mark:                                                                                                | Declared metadata value type.                                                                                     | string                                                                                                            |