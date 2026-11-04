# Schedule

When a rule runs, either on demand or on a cron expression

## Example Usage

```typescript
import { Schedule } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Schedule = {
  expr: "*/15 * * * *",
  kind: "on_demand",
  safetyMargin: "30s",
  tz: "UTC",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `expr`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Cron expression driving the schedule, required when kind is cron                  | */15 * * * *                                                                      |
| `kind`                                                                            | [reconciliation.ScheduleKind](../../../sdk/models/reconciliation/schedulekind.md) | :heavy_check_mark:                                                                | Whether the rule runs only when triggered or on a recurring cron schedule         |                                                                                   |
| `safetyMargin`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Go duration string                                                                | 30s                                                                               |
| `tz`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Timezone the cron expression is interpreted in                                    | UTC                                                                               |