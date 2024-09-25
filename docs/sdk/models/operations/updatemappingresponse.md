# UpdateMappingResponse

## Example Usage

```typescript
import { UpdateMappingResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateMappingResponse = {
  contentType: "<value>",
  mappingResponse: {
    data: {
      contracts: [
        {
          account: "users:001",
          expr: {},
        },
      ],
    },
  },
  statusCode: 401,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `mappingResponse`                                                       | [shared.MappingResponse](../../../sdk/models/shared/mappingresponse.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |