# EvaluationsCursorResponse

OK

## Example Usage

```typescript
import { EvaluationsCursorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: EvaluationsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2026-11-21T18:29:25.399Z"),
        endedAt: new Date("2025-08-09T00:06:16.474Z"),
        id: "087c8a45-faf8-4896-a222-ee678800f48b",
        result: "FAIL",
        ruleID: "9dbf5587-bdbb-40db-99f5-e380ea507731",
        startedAt: new Date("2025-10-18T19:14:42.892Z"),
      },
    ],
    hasMore: true,
    pageSize: 66303,
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                | [reconciliation.EvaluationsCursorResponseCursor](../../../sdk/models/reconciliation/evaluationscursorresponsecursor.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |