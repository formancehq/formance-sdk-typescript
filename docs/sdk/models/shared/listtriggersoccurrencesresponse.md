# ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersOccurrencesResponse = {
  data: [
    {
      date: new Date("2023-08-07T04:09:31.431Z"),
      event: {
        "key": "<value>",
      },
      triggerID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.TriggerOccurrence](../../../sdk/models/shared/triggeroccurrence.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |