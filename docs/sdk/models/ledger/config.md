# Config

## Example Usage

```typescript
import { Config } from "@formance/formance-sdk/sdk/models/ledger";

let value: Config = {
  storage: {
    driver: "<value>",
    ledgers: [],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `storage`                                                           | [ledger.LedgerStorage](../../../sdk/models/ledger/ledgerstorage.md) | :heavy_check_mark:                                                  | N/A                                                                 |