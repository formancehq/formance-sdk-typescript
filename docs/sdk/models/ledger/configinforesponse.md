# ConfigInfoResponse

## Example Usage

```typescript
import { ConfigInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: ConfigInfoResponse = {
  data: {
    config: {
      storage: {
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
| `data`                                                        | [ledger.ConfigInfo](../../../sdk/models/ledger/configinfo.md) | :heavy_check_mark:                                            | N/A                                                           |