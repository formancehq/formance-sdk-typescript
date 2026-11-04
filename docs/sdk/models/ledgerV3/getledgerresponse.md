# GetLedgerResponse

## Example Usage

```typescript
import { GetLedgerResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GetLedgerResponse = {
  data: {
    accountTypes: {
      "key": {
        name: "<value>",
        pattern: "<value>",
        persistence: "TRANSIENT",
        segmentTypes: {
          "key": {
            regex: "[A-Z]{2}[0-9]{14}",
            type: "uuid",
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