# GetBucketIndexResponseBody

Index retrieved successfully.

## Example Usage

```typescript
import { GetBucketIndexResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBucketIndexResponseBody = {
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `data`                               | Record<string, *any*>                | :heavy_check_mark:                   | Index (protobuf JSON representation) |