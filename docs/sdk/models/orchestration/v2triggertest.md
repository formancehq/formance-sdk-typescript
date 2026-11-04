# V2TriggerTest

Result of evaluating a trigger against a sample event, without running the workflow

## Example Usage

```typescript
import { V2TriggerTest } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2TriggerTest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `filter`                                                                                  | [orchestration.Filter](../../../sdk/models/orchestration/filter.md)                       | :heavy_minus_sign:                                                                        | How the trigger's filter evaluated against the sample event                               |
| `variables`                                                                               | Record<string, [orchestration.Variables](../../../sdk/models/orchestration/variables.md)> | :heavy_minus_sign:                                                                        | The variables the trigger would build from the sample event                               |