# V2ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { V2ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListTriggersOccurrencesResponse = {
    contentType: "<value>",
    statusCode: 674752,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    v2ListTriggersOccurrencesResponse: {
        cursor: {
            data: [
                {
                    date: new Date("2023-12-21T08:05:36.916Z"),
                    event: {
                        key: "<value>",
                    },
                    triggerID: "<value>",
                },
            ],
            hasMore: false,
            next: "",
            pageSize: 15,
            previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
        },
    },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `v2ListTriggersOccurrencesResponse`                                                                         | [shared.V2ListTriggersOccurrencesResponse](../../../sdk/models/shared/v2listtriggersoccurrencesresponse.md) | :heavy_minus_sign:                                                                                          | List of triggers occurrences                                                                                |