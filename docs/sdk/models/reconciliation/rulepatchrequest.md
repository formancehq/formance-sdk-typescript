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
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether the rule should be evaluated                                              |
| `labels`                                                                          | Record<string, *string*>                                                          | :heavy_minus_sign:                                                                | New set of key/value pairs attached to the rule                                   |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | New human-readable name for the rule                                              |
| `notifications`                                                                   | *string*[]                                                                        | :heavy_minus_sign:                                                                | New set of channels to notify when this rule raises an alert                      |
| `schedule`                                                                        | [reconciliation.Schedule](../../../sdk/models/reconciliation/schedule.md)         | :heavy_minus_sign:                                                                | When a rule runs, either on demand or on a cron expression                        |
| `severity`                                                                        | [reconciliation.Severity](../../../sdk/models/reconciliation/severity.md)         | :heavy_minus_sign:                                                                | How serious an alert is, used to route and prioritise notifications               |
| `templateKind`                                                                    | [reconciliation.TemplateKind](../../../sdk/models/reconciliation/templatekind.md) | :heavy_minus_sign:                                                                | Which built-in check a rule applies, determining the shape of its templateSpec    |
| `templateSpec`                                                                    | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | New parameters for the template, whose shape depends on templateKind              |