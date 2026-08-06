# Schedule

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
| `expr`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | */15 * * * *                                                                      |
| `kind`                                                                            | [reconciliation.ScheduleKind](../../../sdk/models/reconciliation/schedulekind.md) | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `safetyMargin`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Go duration string                                                                | 30s                                                                               |
| `tz`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | UTC                                                                               |