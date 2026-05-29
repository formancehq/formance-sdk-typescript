# ReadTriggerResponse

## Example Usage

```typescript
import { ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ReadTriggerResponse = {
  triggerData: {
    createdAt: new Date("2026-01-15T18:25:31.828Z"),
    event: "<value>",
    id: "<id>",
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `triggerData`                                                                   | [orchestration.TriggerData1](../../../sdk/models/orchestration/triggerdata1.md) | :heavy_check_mark:                                                              | N/A                                                                             |