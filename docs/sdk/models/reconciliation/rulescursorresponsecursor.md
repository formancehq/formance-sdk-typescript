# RulesCursorResponseCursor

## Example Usage

```typescript
import { RulesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: RulesCursorResponseCursor = {
  data: [],
  hasMore: false,
  pageSize: 354465,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [reconciliation.Rule](../../../sdk/models/reconciliation/rule.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |
| `hasMore`                                                           | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 |
| `next`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `pageSize`                                                          | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `previous`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |