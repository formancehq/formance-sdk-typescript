# TriggerData2

## Example Usage

```typescript
import { TriggerData2 } from "@formance/formance-sdk/sdk/models/orchestration";

let value: TriggerData2 = {
  event: "<value>",
  workflowID: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `event`               | *string*              | :heavy_check_mark:    | N/A                   |
| `filter`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `name`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `vars`                | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `version`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `workflowID`          | *string*              | :heavy_check_mark:    | N/A                   |