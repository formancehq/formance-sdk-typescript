# GroupedAggregateResult

## Example Usage

```typescript
import { GroupedAggregateResult } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GroupedAggregateResult = {
  prefix: "<value>",
  volumes: [],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `prefix`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | Account prefix this group matches                                               |
| `volumes`                                                                       | [ledgerV3.AggregatedVolume](../../../sdk/models/ledgerV3/aggregatedvolume.md)[] | :heavy_check_mark:                                                              | Aggregated volumes for accounts matching this prefix                            |