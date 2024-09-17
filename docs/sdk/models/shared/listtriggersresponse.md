# ListTriggersResponse

## Example Usage

```typescript
import { ListTriggersResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersResponse = {
  data: [
    {
      createdAt: new Date("2024-07-27T12:11:36.721Z"),
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