# AggregateVolumesData

## Example Usage

```typescript
import { AggregateVolumesData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AggregateVolumesData = {
  volumes: [],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `groups`                                                                                    | [ledgerV3.GroupedAggregateResult](../../../sdk/models/ledgerV3/groupedaggregateresult.md)[] | :heavy_minus_sign:                                                                          | Per-prefix aggregated volumes (present when groupByPrefixes is set)                         |
| `volumes`                                                                                   | [ledgerV3.AggregatedVolume](../../../sdk/models/ledgerV3/aggregatedvolume.md)[]             | :heavy_check_mark:                                                                          | Flat aggregated volumes per asset                                                           |