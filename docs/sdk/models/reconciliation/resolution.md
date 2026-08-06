# Resolution

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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `by`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceSnapshot`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [reconciliation.ResolutionKind](../../../sdk/models/reconciliation/resolutionkind.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `transactionRefs`                                                                             | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |