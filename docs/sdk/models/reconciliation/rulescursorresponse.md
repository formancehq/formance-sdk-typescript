# RulesCursorResponse

OK

## Example Usage

```typescript
import { RulesCursorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: RulesCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2026-01-07T08:39:00.779Z"),
        enabled: false,
        id: "bf683748-e3b9-4e14-b327-8f5bf5745fd5",
        name: "<value>",
        schedule: {
          expr: "*/15 * * * *",
          kind: "cron",
          safetyMargin: "30s",
          tz: "UTC",
        },
        severity: "low",
        templateKind: "ledger_invariant",
        templateSpec: {
          "key": "<value>",
        },
        updatedAt: new Date("2024-05-10T13:28:41.512Z"),
      },
    ],
    hasMore: false,
    pageSize: 34908,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                    | [reconciliation.RulesCursorResponseCursor](../../../sdk/models/reconciliation/rulescursorresponsecursor.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |