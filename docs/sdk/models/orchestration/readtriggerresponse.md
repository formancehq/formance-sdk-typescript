# ReadTriggerResponse

## Example Usage

```typescript
import { ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ReadTriggerResponse = {
  data: {
    createdAt: new Date("2026-01-15T18:25:31.828Z"),
    event: "<value>",
    id: "<id>",
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [orchestration.Trigger](../../../sdk/models/orchestration/trigger.md) | :heavy_check_mark:                                                    | N/A                                                                   |