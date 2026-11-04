# V2Stats

Aggregate counts for a ledger

## Example Usage

```typescript
import { V2Stats } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Stats = {
  accounts: 840151,
  transactions: 475117n,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `accounts`                                 | *number*                                   | :heavy_check_mark:                         | Total number of accounts in the ledger     |
| `transactions`                             | *BigInt*                                   | :heavy_check_mark:                         | Total number of transactions in the ledger |