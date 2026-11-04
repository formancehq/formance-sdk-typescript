# GetAccountTypeResponse

## Example Usage

```typescript
import { GetAccountTypeResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GetAccountTypeResponse = {
  data: {
    name: "<value>",
    pattern: "<value>",
    persistence: "EPHEMERAL",
    segmentTypes: {
      "key": {
        regex: "[A-Z]{2}[0-9]{14}",
        type: "uuid",
      },
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [ledgerV3.AccountTypeInfo](../../../sdk/models/ledgerV3/accounttypeinfo.md) | :heavy_check_mark:                                                          | N/A                                                                         |