# ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTriggersOccurrencesResponse = {
  data: [
    {
      date: new Date("2022-05-25T07:54:08.139Z"),
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