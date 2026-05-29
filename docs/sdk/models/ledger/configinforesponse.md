# ConfigInfoResponse

## Example Usage

```typescript
import { ConfigInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: ConfigInfoResponse = {
  configInfo: {
    config: {
      ledgerStorage: {
        driver: "<value>",
        ledgers: [],
      },
    },
    server: "<value>",
    version: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `configInfo`                                                  | [ledger.ConfigInfo](../../../sdk/models/ledger/configinfo.md) | :heavy_check_mark:                                            | N/A                                                           |