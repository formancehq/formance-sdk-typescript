# ListBucketIndexesResponseBody

Indexes retrieved successfully.

## Example Usage

```typescript
import { ListBucketIndexesResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: ListBucketIndexesResponseBody = {
  data: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `data`                  | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |