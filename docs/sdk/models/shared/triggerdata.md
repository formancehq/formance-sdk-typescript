# TriggerData

## Example Usage

```typescript
import { TriggerData } from "@formance/formance-sdk/sdk/models/shared";

let value: TriggerData = {
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
| `workflowID`          | *string*              | :heavy_check_mark:    | N/A                   |