# GetBalancesAggregatedResponse

## Example Usage

```typescript
import { GetBalancesAggregatedResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBalancesAggregatedResponse = {
  aggregateBalancesResponse: {
    data: {
      "USD": 100,
      "EUR": 12,
    },
  },
  contentType: "<value>",
  statusCode: 118274,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `aggregateBalancesResponse`                                                                 | [shared.AggregateBalancesResponse](../../../sdk/models/shared/aggregatebalancesresponse.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |