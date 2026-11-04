# MetadataSchemaStatusResponse

## Example Usage

```typescript
import { MetadataSchemaStatusResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MetadataSchemaStatusResponse = {
  data: {
    accountFields: {
      "key": {
        declaredType: "uint64",
      },
    },
    ledgerFields: {},
    transactionFields: {
      "key": {
        declaredType: "bool",
      },
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                        | [ledgerV3.MetadataSchemaStatusResponseData](../../../sdk/models/ledgerV3/metadataschemastatusresponsedata.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |