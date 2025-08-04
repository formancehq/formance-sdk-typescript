# GetBalanceResponse

## Example Usage

```typescript
import { GetBalanceResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBalanceResponse = {
  contentType: "<value>",
  statusCode: 604106,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `getBalanceResponse`                                                          | [shared.GetBalanceResponse](../../../sdk/models/shared/getbalanceresponse.md) | :heavy_minus_sign:                                                            | Balance summary                                                               |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |