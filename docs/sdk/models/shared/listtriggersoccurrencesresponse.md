# ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersOccurrencesResponse = {
  data: [
    {
      date: new Date("2024-01-10T22:30:43.334Z"),
      event: {
        "key": "<value>",
      },
      triggerID: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TriggerOccurrence](../../../sdk/models/shared/triggeroccurrence.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |