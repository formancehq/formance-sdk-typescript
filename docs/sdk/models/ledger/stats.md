# Stats

Aggregate counts for a ledger

## Example Usage

```typescript
import { Stats } from "@formance/formance-sdk/sdk/models/ledger";

let value: Stats = {
  accounts: 703687,
  transactions: 183130,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `accounts`                                 | *number*                                   | :heavy_check_mark:                         | Total number of accounts in the ledger     |
| `transactions`                             | *number*                                   | :heavy_check_mark:                         | Total number of transactions in the ledger |