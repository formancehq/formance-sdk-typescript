# V3GetIndexEntryStatusResponseBody

Index entry retrieved successfully.

## Example Usage

```typescript
import { V3GetIndexEntryStatusResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetIndexEntryStatusResponseBody = {
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `data`                                    | Record<string, *any*>                     | :heavy_check_mark:                        | IndexEntry (protobuf JSON representation) |