# InspectSummaryResponse

## Example Usage

```typescript
import { InspectSummaryResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: InspectSummaryResponse = {
  cardinality: 420432,
  entitiesWithKey: 85389,
  entitiesWithNull: 212135,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `cardinality`                                                 | *number*                                                      | :heavy_check_mark:                                            | Number of distinct values                                     |
| `entitiesWithKey`                                             | *number*                                                      | :heavy_check_mark:                                            | Number of entities that have this metadata key set (non-null) |
| `entitiesWithNull`                                            | *number*                                                      | :heavy_check_mark:                                            | Number of entities with a null value for this key             |
| `max`                                                         | *any*                                                         | :heavy_minus_sign:                                            | Maximum value (null if index is empty)                        |
| `min`                                                         | *any*                                                         | :heavy_minus_sign:                                            | Minimum value (null if index is empty)                        |