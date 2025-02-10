# V2GetBalancesAggregatedResponse

## Example Usage

```typescript
import { V2GetBalancesAggregatedResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetBalancesAggregatedResponse = {
  contentType: "<value>",
  statusCode: 404,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2AggregateBalancesResponse: {
    data: {
      "USD": BigInt("100"),
      "EUR": BigInt("12"),
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `v2AggregateBalancesResponse`                                                                   | [shared.V2AggregateBalancesResponse](../../../sdk/models/shared/v2aggregatebalancesresponse.md) | :heavy_minus_sign:                                                                              | OK                                                                                              |