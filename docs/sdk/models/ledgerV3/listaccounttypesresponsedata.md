# ListAccountTypesResponseData

## Example Usage

```typescript
import { ListAccountTypesResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ListAccountTypesResponseData = {
  types: [
    {
      name: "<value>",
      pattern: "<value>",
      persistence: "TRANSIENT",
      segmentTypes: {
        "key": {
          regex: "[A-Z]{2}[0-9]{14}",
          type: "uint64",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `types`                                                                       | [ledgerV3.AccountTypeInfo](../../../sdk/models/ledgerV3/accounttypeinfo.md)[] | :heavy_check_mark:                                                            | List of account types sorted by name                                          |