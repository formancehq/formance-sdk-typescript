# CreateLedgerResponse

## Example Usage

```typescript
import { CreateLedgerResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreateLedgerResponse = {
  data: {
    accountTypes: {
      "key": {
        name: "<value>",
        pattern: "<value>",
        persistence: "EPHEMERAL",
        segmentTypes: {
          "key": {
            regex: "[A-Z]{2}[0-9]{14}",
            type: "uint64",
          },
        },
      },
    },
    defaultEnforcementMode: "STRICT",
    mode: "NORMAL",
    name: "<value>",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [ledgerV3.LedgerInfo](../../../sdk/models/ledgerV3/ledgerinfo.md) | :heavy_check_mark:                                                | N/A                                                               |