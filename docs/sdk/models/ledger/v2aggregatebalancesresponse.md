# V2AggregateBalancesResponse

## Example Usage

```typescript
import { V2AggregateBalancesResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2AggregateBalancesResponse = {
  v2AssetsBalances: {
    "USD": 100n,
    "EUR": 12n,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `v2AssetsBalances`        | Record<string, *BigInt*>  | :heavy_check_mark:        | N/A                       | {<br/>"USD": 100,<br/>"EUR": 12<br/>} |