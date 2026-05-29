# StatsResponse

## Example Usage

```typescript
import { StatsResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: StatsResponse = {
  stats: {
    accounts: 412798,
    transactions: 642378,
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `stats`                                             | [ledger.Stats](../../../sdk/models/ledger/stats.md) | :heavy_check_mark:                                  | N/A                                                 |