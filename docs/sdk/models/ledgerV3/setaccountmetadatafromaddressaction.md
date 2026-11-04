# SetAccountMetadataFromAddressAction

For every posting address matching `pattern`, iterate every entry in `replacements` and set accountMetadata[address][key] to the RE2 replacement of the address. Each replacement carries an optional metadata `type` token (same tokens as SetMetadataAction.type).


## Example Usage

```typescript
import { SetAccountMetadataFromAddressAction } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SetAccountMetadataFromAddressAction = {
  pattern: "<value>",
  replacements: [],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                       | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `replacements`                                                                                                                  | [ledgerV3.SetAccountMetadataFromAddressReplacement](../../../sdk/models/ledgerV3/setaccountmetadatafromaddressreplacement.md)[] | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |