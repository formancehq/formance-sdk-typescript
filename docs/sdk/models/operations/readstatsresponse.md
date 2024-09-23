# ReadStatsResponse

## Example Usage

```typescript
import { ReadStatsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadStatsResponse = {
  contentType: "<value>",
  statusCode: 616934,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statsResponse`                                                       | [shared.StatsResponse](../../../sdk/models/shared/statsresponse.md)   | :heavy_minus_sign:                                                    | OK                                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |