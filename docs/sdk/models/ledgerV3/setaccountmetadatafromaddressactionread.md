# SetAccountMetadataFromAddressActionRead

For every posting address matching `pattern`, iterate every entry in `replacements` and set accountMetadata[address][key] to the RE2 replacement of the address. Each replacement carries an optional metadata `type` token (same tokens as SetMetadataActionRead.type).


## Example Usage

```typescript
import { SetAccountMetadataFromAddressActionRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SetAccountMetadataFromAddressActionRead = {
  pattern: "<value>",
  replacements: [
    {
      key: "<key>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                               | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `replacements`                                                                                                                          | [ledgerV3.SetAccountMetadataFromAddressReplacementRead](../../../sdk/models/ledgerV3/setaccountmetadatafromaddressreplacementread.md)[] | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |