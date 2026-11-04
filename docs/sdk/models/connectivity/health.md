# Health

## Example Usage

```typescript
import { Health } from "@formance/formance-sdk/sdk/models/connectivity";

let value: Health = {
  status: "ok",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `status`                                                                      | [connectivity.HealthStatus](../../../sdk/models/connectivity/healthstatus.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `version`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | Semantic version of the API binary                                            |