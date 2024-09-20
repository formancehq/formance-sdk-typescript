# V2ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { V2ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListTriggersOccurrencesResponse = {
  cursor: {
    data: [
      {
        date: new Date("2024-04-24T21:02:13.053Z"),
        event: {
          "key": "<value>",
        },
        triggerID: "<value>",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                | [shared.V2ListTriggersOccurrencesResponseCursor](../../../sdk/models/shared/v2listtriggersoccurrencesresponsecursor.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |