# GetIndexEntryStatusResponseBody

Index entry retrieved successfully.

## Example Usage

```typescript
import { GetIndexEntryStatusResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: GetIndexEntryStatusResponseBody = {
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `data`                                    | Record<string, *any*>                     | :heavy_check_mark:                        | IndexEntry (protobuf JSON representation) |