# V3GetIndexStatusResponseBody

Index status retrieved successfully.

## Example Usage

```typescript
import { V3GetIndexStatusResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetIndexStatusResponseBody = {
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | Record<string, *any*>                                 | :heavy_check_mark:                                    | GetIndexStatusResponse (protobuf JSON representation) |