# GetManyConfigsResponse

## Example Usage

```typescript
import { GetManyConfigsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetManyConfigsResponse = {
    configsResponse: {
        cursor: {
            data: [
                {
                    active: true,
                    createdAt: new Date("2023-05-24T01:53:16.513Z"),
                    endpoint: "https://example.com",
                    eventTypes: ["TYPE1", "TYPE2"],
                    id: "3429cdb1-a842-42bb-a79d-2322715bf0cb",
                    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
                    updatedAt: new Date("2024-03-31T12:50:52.726Z"),
                },
            ],
            hasMore: false,
        },
    },
    contentType: "<value>",
    statusCode: 92596,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `configsResponse`                                                       | [shared.ConfigsResponse](../../../sdk/models/shared/configsresponse.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |