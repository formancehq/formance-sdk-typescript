# ListTriggersOccurrencesResponse

## Example Usage

```typescript
import { ListTriggersOccurrencesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListTriggersOccurrencesResponse = {
    contentType: "<value>",
    statusCode: 38425,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `listTriggersOccurrencesResponse`                                                                       | [shared.ListTriggersOccurrencesResponse](../../../sdk/models/shared/listtriggersoccurrencesresponse.md) | :heavy_minus_sign:                                                                                      | List of triggers occurrences                                                                            |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |