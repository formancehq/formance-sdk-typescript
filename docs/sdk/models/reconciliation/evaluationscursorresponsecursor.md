# EvaluationsCursorResponseCursor

## Example Usage

```typescript
import { EvaluationsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: EvaluationsCursorResponseCursor = {
  data: [],
  hasMore: false,
  pageSize: 634937,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [reconciliation.Evaluation](../../../sdk/models/reconciliation/evaluation.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pageSize`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `previous`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |