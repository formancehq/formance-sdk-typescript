# EvaluationResponse

OK

## Example Usage

```typescript
import { EvaluationResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: EvaluationResponse = {
  data: {
    createdAt: new Date("2026-06-10T21:15:07.823Z"),
    endedAt: new Date("2026-05-23T05:13:32.788Z"),
    id: "76dccc4a-8e59-4884-a3fa-e954ada44d1b",
    result: "PASS",
    ruleID: "e8871683-a49f-4f15-96b2-af04fb1d745f",
    startedAt: new Date("2025-11-15T21:30:28.022Z"),
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [reconciliation.Evaluation](../../../sdk/models/reconciliation/evaluation.md) | :heavy_check_mark:                                                            | N/A                                                                           |