# PatchRuleRequest

## Example Usage

```typescript
import { PatchRuleRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: PatchRuleRequest = {
  rulePatchRequest: {
    schedule: {
      expr: "*/15 * * * *",
      kind: "cron",
      safetyMargin: "30s",
      tz: "UTC",
    },
  },
  ruleID: "5500f01c-2f1e-4e29-a9ef-f0a342e6bcee",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `rulePatchRequest`                                                                        | [reconciliation.RulePatchRequest](../../../sdk/models/reconciliation/rulepatchrequest.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `ruleID`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The rule ID.                                                                              |