# ReadTriggerResponse

## Example Usage

```typescript
import { ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ReadTriggerResponse = {
  data: {
    createdAt: new Date("2023-06-09T09:55:13.803Z"),
    event: "<value>",
    id: "<id>",
    workflowID: "<id>",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Trigger](../../../sdk/models/shared/trigger.md) | :heavy_check_mark:                                      | N/A                                                     |