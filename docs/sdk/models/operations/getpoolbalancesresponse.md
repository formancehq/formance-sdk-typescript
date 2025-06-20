# GetPoolBalancesResponse

## Example Usage

```typescript
import { GetPoolBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetPoolBalancesResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `poolBalancesResponse`                                                            | [shared.PoolBalancesResponse](../../../sdk/models/shared/poolbalancesresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |