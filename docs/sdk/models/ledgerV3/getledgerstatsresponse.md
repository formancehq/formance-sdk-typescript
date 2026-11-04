# GetLedgerStatsResponse

## Example Usage

```typescript
import { GetLedgerStatsResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GetLedgerStatsResponse = {
  data: {
    ephemeralEvictedCount: 767564,
    logCount: 428781,
    numscriptExecutionCount: 423885,
    postingCount: 10873,
    referenceCount: 490084,
    revertCount: 998373,
    transactionCount: 417158,
    transientUsedCount: 515524,
    volumeCount: 176547,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [ledgerV3.LedgerStats](../../../sdk/models/ledgerV3/ledgerstats.md) | :heavy_check_mark:                                                  | N/A                                                                 |