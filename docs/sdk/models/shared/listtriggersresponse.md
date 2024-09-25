# ListTriggersResponse

## Example Usage

```typescript
import { ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersResponse = {
  data: [
    {
      createdAt: new Date("2023-06-21T16:40:18.965Z"),
      event: "<value>",
      id: "<id>",
      workflowID: "<value>",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Trigger](../../../sdk/models/shared/trigger.md)[] | :heavy_check_mark:                                        | N/A                                                       |