# V2AggregateBalancesResponse

## Example Usage

```typescript
import { V2AggregateBalancesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AggregateBalancesResponse = {
  data: {
    "USD": BigInt("100"),
    "EUR": BigInt("12"),
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | Record<string, *BigInt*>  | :heavy_check_mark:        | N/A                       | {<br/>"USD": 100,<br/>"EUR": 12<br/>} |