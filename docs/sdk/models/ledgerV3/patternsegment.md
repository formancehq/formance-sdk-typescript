# PatternSegment

## Example Usage

```typescript
import { PatternSegment } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: PatternSegment = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `examples`                                                                        | *string*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `fixedValue`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `inferredPattern`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `position`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `type`                                                                            | [ledgerV3.PatternSegmentType](../../../sdk/models/ledgerV3/patternsegmenttype.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `uniqueValues`                                                                    | *number*                                                                          | :heavy_minus_sign:                                                                | Number of distinct values observed at this segment position.                      |
| `variableName`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |