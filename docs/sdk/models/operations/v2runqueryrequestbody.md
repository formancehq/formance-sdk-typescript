# V2RunQueryRequestBody

## Example Usage

```typescript
import { V2RunQueryRequestBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RunQueryRequestBody = {
  params: {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
    sort: "id:desc",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `cursor`                 | *string*                 | :heavy_minus_sign:       | N/A                      |
| `params`                 | *shared.V2QueryParams*   | :heavy_minus_sign:       | N/A                      |
| `vars`                   | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |