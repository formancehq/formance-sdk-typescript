# V3UpdatePoolQueryRequest

## Example Usage

```typescript
import { V3UpdatePoolQueryRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3UpdatePoolQueryRequest = {
  query: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `query`                                               | Record<string, *any*>                                 | :heavy_check_mark:                                    | Filter selecting the accounts a dynamic pool contains |