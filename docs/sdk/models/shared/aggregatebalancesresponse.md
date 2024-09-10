# AggregateBalancesResponse

## Example Usage

```typescript
import { AggregateBalancesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AggregateBalancesResponse = {
  data: {
    "USD": 100,
    "EUR": 12,
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `data`                    | Record<string, *number*>  | :heavy_check_mark:        | N/A                       | {<br/>"USD": 100,<br/>"EUR": 12<br/>} |