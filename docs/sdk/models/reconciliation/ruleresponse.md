# RuleResponse

OK

## Example Usage

```typescript
import { RuleResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: RuleResponse = {
  data: {
    createdAt: new Date("2026-05-04T15:34:27.501Z"),
    enabled: true,
    id: "eeb0f296-7394-4121-938f-af3ad156db81",
    name: "<value>",
    schedule: {
      expr: "*/15 * * * *",
      kind: "cron",
      safetyMargin: "30s",
      tz: "UTC",
    },
    severity: "high",
    templateKind: "ledger_vs_pool_drift",
    templateSpec: {},
    updatedAt: new Date("2026-12-23T01:35:02.762Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [reconciliation.Rule](../../../sdk/models/reconciliation/rule.md) | :heavy_check_mark:                                                | N/A                                                               |