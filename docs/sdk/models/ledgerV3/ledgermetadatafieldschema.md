# LedgerMetadataFieldSchema

## Example Usage

```typescript
import { LedgerMetadataFieldSchema } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: LedgerMetadataFieldSchema = {
  type: "datetime",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                  | [ledgerV3.LedgerMetadataFieldSchemaType](../../../sdk/models/ledgerV3/ledgermetadatafieldschematype.md) | :heavy_check_mark:                                                                                      | Declared metadata type, using the same tokens as schema creation                                        |