# LedgerStats

## Example Usage

```typescript
import { LedgerStats } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: LedgerStats = {
  ephemeralEvictedCount: 602268,
  logCount: 539146,
  numscriptExecutionCount: 288473,
  postingCount: 893085,
  referenceCount: 537809,
  revertCount: 84548,
  transactionCount: 284659,
  transientUsedCount: 362514,
  volumeCount: 336447,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ephemeralEvictedCount`                                             | *number*                                                            | :heavy_check_mark:                                                  | Number of ephemeral/draining volumes evicted from storage at commit |
| `logCount`                                                          | *number*                                                            | :heavy_check_mark:                                                  | Number of log entries in the ledger                                 |
| `numscriptExecutionCount`                                           | *number*                                                            | :heavy_check_mark:                                                  | Number of Numscript executions in the ledger                        |
| `postingCount`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Total number of postings across all transactions                    |
| `referenceCount`                                                    | *number*                                                            | :heavy_check_mark:                                                  | Number of transaction references registered in the ledger           |
| `revertCount`                                                       | *number*                                                            | :heavy_check_mark:                                                  | Number of reverted transactions in the ledger                       |
| `transactionCount`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of transactions in the ledger                                |
| `transientUsedCount`                                                | *number*                                                            | :heavy_check_mark:                                                  | Number of transient volumes used across proposals                   |
| `volumeCount`                                                       | *number*                                                            | :heavy_check_mark:                                                  | Number of persisted (account, asset, color) volume rows             |