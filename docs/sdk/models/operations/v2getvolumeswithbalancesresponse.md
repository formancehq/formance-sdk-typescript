# V2GetVolumesWithBalancesResponse

## Example Usage

```typescript
import { V2GetVolumesWithBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetVolumesWithBalancesResponse = {
    contentType: "<value>",
    statusCode: 568434,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    v2VolumesWithBalanceCursorResponse: {
        cursor: {
            data: [
                {
                    account: "10361626",
                    asset: "<value>",
                    balance: BigInt("386489"),
                    input: BigInt("943749"),
                    output: BigInt("902599"),
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v2VolumesWithBalanceCursorResponse`                                                                          | [shared.V2VolumesWithBalanceCursorResponse](../../../sdk/models/shared/v2volumeswithbalancecursorresponse.md) | :heavy_minus_sign:                                                                                            | OK                                                                                                            |