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
          createdAt: new Date("2022-08-15T10:15:52.229Z"),
          endpoint: "https://example.com",
          eventTypes: [
            "TYPE1",
            "TYPE2",
          ],
          id: "cdca4251-904e-4523-87e0-bc7178e4796f",
          secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
          updatedAt: new Date("2022-07-10T19:50:26.525Z"),
        },
      ],
      hasMore: false,
    },
  },
  contentType: "<value>",
  statusCode: 645570,
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