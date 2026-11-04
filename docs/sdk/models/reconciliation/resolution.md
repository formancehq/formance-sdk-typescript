# Resolution

Record of how an alert was resolved and by whom

## Example Usage

```typescript
import { Resolution } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Resolution = {
  at: new Date("2026-10-19T16:06:12.078Z"),
  by: "<value>",
  kind: "auto",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `at`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | When the alert was resolved                                                                                       |
| `by`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Who resolved the alert                                                                                            |
| `evidenceSnapshot`                                                                                                | Record<string, *any*>                                                                                             | :heavy_minus_sign:                                                                                                | The alert's evidence captured at resolution time, kept for audit                                                  |
| `kind`                                                                                                            | [reconciliation.ResolutionKind](../../../sdk/models/reconciliation/resolutionkind.md)                             | :heavy_check_mark:                                                                                                | How the alert was resolved, whether automatically, by booking a correcting transaction, or by business acceptance |
| `note`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Free-text note left by whoever resolved the alert                                                                 |
| `transactionRefs`                                                                                                 | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | References of the transactions booked to correct the break                                                        |