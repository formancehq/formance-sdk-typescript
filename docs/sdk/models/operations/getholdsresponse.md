# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetHoldsResponse = {
    contentType: "<value>",
    getHoldsResponse: {
        cursor: {
            data: [
                {
                    description: "Realigned holistic workforce",
                    id: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
                    metadata: {
                        key: "<value>",
                    },
                    walletID: "<value>",
                },
            ],
            hasMore: false,
            next: "",
            pageSize: 15,
            previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
        },
    },
    statusCode: 855804,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `getHoldsResponse`                                                        | [shared.GetHoldsResponse](../../../sdk/models/shared/getholdsresponse.md) | :heavy_minus_sign:                                                        | Holds                                                                     |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |