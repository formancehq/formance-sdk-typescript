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
          createdAt: new Date("2023-10-09T07:19:47.979Z"),
          endpoint: "https://example.com",
          eventTypes: [
            "TYPE1",
            "TYPE2",
          ],
          id: "bdef662a-ad17-4932-ad07-17f6d1466a5b",
          secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
          updatedAt: new Date("2023-03-14T11:32:05.153Z"),
        },
      ],
      hasMore: false,
    },
  },
  contentType: "<value>",
  statusCode: 431760,
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