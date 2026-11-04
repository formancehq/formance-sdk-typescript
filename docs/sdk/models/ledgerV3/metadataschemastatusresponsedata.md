# MetadataSchemaStatusResponseData

## Example Usage

```typescript
import { MetadataSchemaStatusResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MetadataSchemaStatusResponseData = {
  accountFields: {
    "key": {
      declaredType: "uint64",
    },
  },
  ledgerFields: {},
  transactionFields: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountFields`                                                                                     | Record<string, [ledgerV3.MetadataFieldStatus](../../../sdk/models/ledgerV3/metadatafieldstatus.md)> | :heavy_check_mark:                                                                                  | Account metadata field declarations                                                                 |
| `ledgerFields`                                                                                      | Record<string, [ledgerV3.MetadataFieldStatus](../../../sdk/models/ledgerV3/metadatafieldstatus.md)> | :heavy_check_mark:                                                                                  | Ledger metadata field declarations                                                                  |
| `transactionFields`                                                                                 | Record<string, [ledgerV3.MetadataFieldStatus](../../../sdk/models/ledgerV3/metadatafieldstatus.md)> | :heavy_check_mark:                                                                                  | Transaction metadata field declarations                                                             |