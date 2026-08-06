# RulePatchRequest

Partial update — only fields supplied are applied.

## Example Usage

```typescript
import { RulePatchRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: RulePatchRequest = {
  schedule: {
    expr: "*/15 * * * *",
    kind: "cron",
    safetyMargin: "30s",
    tz: "UTC",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `labels`                                                                          | Record<string, *string*>                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `notifications`                                                                   | *string*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `schedule`                                                                        | [reconciliation.Schedule](../../../sdk/models/reconciliation/schedule.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `severity`                                                                        | [reconciliation.Severity](../../../sdk/models/reconciliation/severity.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `templateKind`                                                                    | [reconciliation.TemplateKind](../../../sdk/models/reconciliation/templatekind.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `templateSpec`                                                                    | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | N/A                                                                               |