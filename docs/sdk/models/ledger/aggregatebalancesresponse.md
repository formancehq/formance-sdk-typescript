# AggregateBalancesResponse

## Example Usage

```typescript
import { AggregateBalancesResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: AggregateBalancesResponse = {
  assetsBalances: {
    "USD": 100,
    "EUR": 12,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `assetsBalances`          | Record<string, *number*>  | :heavy_check_mark:        | N/A                       | {<br/>"USD": 100,<br/>"EUR": 12<br/>} |