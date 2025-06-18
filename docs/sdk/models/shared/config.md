# Config

## Example Usage

```typescript
import { Config } from "@formance/formance-sdk/sdk/models/shared";

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
| `storage`                                                           | [shared.LedgerStorage](../../../sdk/models/shared/ledgerstorage.md) | :heavy_check_mark:                                                  | N/A                                                                 |