# QueryCapabilities

The filterable keys per resource, serialized from the same allowlist
the server enforces -- it cannot drift from what queries accept.


## Example Usage

```typescript
import { QueryCapabilities } from "@formance/formance-sdk/sdk/models/connectivity";

let value: QueryCapabilities = {
  resources: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `resources`                                                                                                                   | Record<string, Record<string, [connectivity.QueryFieldCapability](../../../sdk/models/connectivity/queryfieldcapability.md)>> | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |