# V3GetIndexResponseBody

Index retrieved successfully.

## Example Usage

```typescript
import { V3GetIndexResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetIndexResponseBody = {
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `data`                               | Record<string, *any*>                | :heavy_check_mark:                   | Index (protobuf JSON representation) |