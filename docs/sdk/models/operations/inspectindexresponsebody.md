# InspectIndexResponseBody

Index inspection result

## Example Usage

```typescript
import { InspectIndexResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: InspectIndexResponseBody = {
  data: {
    cardinality: 532234,
    entitiesWithKey: 959876,
    entitiesWithNull: 365557,
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `data`                        | *operations.InspectIndexData* | :heavy_check_mark:            | N/A                           |