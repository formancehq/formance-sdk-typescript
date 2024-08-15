# ListClientsResponse

## Example Usage

```typescript
import { ListClientsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListClientsResponse = {
    contentType: "<value>",
    statusCode: 544883,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `listClientsResponse`                                                           | [shared.ListClientsResponse](../../../sdk/models/shared/listclientsresponse.md) | :heavy_minus_sign:                                                              | List of clients                                                                 |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |