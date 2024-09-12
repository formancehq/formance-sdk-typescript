# ListTriggersResponse

## Example Usage

```typescript
import { ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersResponse = {
  data: [
    {
      createdAt: new Date("2024-10-04T19:21:17.718Z"),
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