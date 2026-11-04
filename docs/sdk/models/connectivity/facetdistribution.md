# FacetDistribution

Distinct-connector counts per facet value, computed from the
namespaced `facet:value` tags of the connectors matching the query.


## Example Usage

```typescript
import { FacetDistribution } from "@formance/formance-sdk/sdk/models/connectivity";

let value: FacetDistribution = {
  facets: {
    "key": {},
  },
  total: 250327,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `facets`                                                            | Record<string, Record<string, *number*>>                            | :heavy_check_mark:                                                  | Facet name to value-to-count map, e.g. `{"provider": {"psp": 6}}`.<br/> |
| `total`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Published connectors matching the query.                            |