# ConfigInfo

## Example Usage

```typescript
import { ConfigInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: ConfigInfo = {
  config: {
    ledgerStorage: {
      driver: "<value>",
      ledgers: [],
    },
  },
  server: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `config`                                              | [ledger.Config](../../../sdk/models/ledger/config.md) | :heavy_check_mark:                                    | N/A                                                   |
| `experimentalFeatures`                                | *string*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `server`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `version`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |