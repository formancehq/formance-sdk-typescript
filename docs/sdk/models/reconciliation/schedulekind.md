# ScheduleKind

Whether the rule runs only when triggered or on a recurring cron schedule

## Example Usage

```typescript
import { ScheduleKind } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: ScheduleKind = "on_demand";
```

## Values

```typescript
"on_demand" | "cron"
```