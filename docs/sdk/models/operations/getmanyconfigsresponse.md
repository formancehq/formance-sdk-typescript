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
          createdAt: new Date("2024-07-28T09:48:49.789Z"),
          endpoint: "https://example.com",
          eventTypes: [
            "TYPE1",
            "TYPE2",
          ],
          id: "1466a5ba-6691-4dab-a816-650b19baf1d0",
          secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
          updatedAt: new Date("2023-03-20T01:13:26.854Z"),
        },
      ],
      hasMore: false,
    },
  },
  contentType: "<value>",
  statusCode: 524184,
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