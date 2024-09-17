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
          createdAt: new Date("2024-11-04T07:38:10.034Z"),
          endpoint: "https://example.com",
          eventTypes: [
            "TYPE1",
            "TYPE2",
          ],
          id: "3be453f8-70b3-426b-9a73-429cdb1a8422",
          secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
          updatedAt: new Date("2024-02-25T16:16:37.273Z"),
        },
      ],
      hasMore: false,
    },
  },
  contentType: "<value>",
  statusCode: 704474,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
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