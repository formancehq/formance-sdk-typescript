# V3InspectIndexResponseBody

Index inspection result

## Example Usage

```typescript
import { V3InspectIndexResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3InspectIndexResponseBody = {
  data: {
    cardinality: 871082,
    entitiesWithKey: 727882,
    entitiesWithNull: 318725,
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `data`                          | *operations.V3InspectIndexData* | :heavy_check_mark:              | N/A                             |