# ListTriggersResponse

## Example Usage

```typescript
import { ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersResponse = {
  data: [
    {
      createdAt: new Date("2024-11-06T19:31:53.541Z"),
      event: "<value>",
      id: "<id>",
      workflowID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.Trigger](../../../sdk/models/shared/trigger.md)[] | :heavy_check_mark:                                        | N/A                                                       |