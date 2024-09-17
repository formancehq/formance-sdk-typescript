# ReadTriggerResponse

## Example Usage

```typescript
import { ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ReadTriggerResponse = {
  data: {
    createdAt: new Date("2022-01-09T15:23:00.369Z"),
    event: "<value>",
    id: "<id>",
    workflowID: "<value>",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Trigger](../../../sdk/models/shared/trigger.md) | :heavy_check_mark:                                      | N/A                                                     |