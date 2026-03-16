# GetPoolBalancesLatestResponse

## Example Usage

```typescript
import { GetPoolBalancesLatestResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetPoolBalancesLatestResponse = {
  contentType: "<value>",
  statusCode: 518377,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `poolBalancesLatestResponse`                                                                  | [shared.PoolBalancesLatestResponse](../../../sdk/models/shared/poolbalanceslatestresponse.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |