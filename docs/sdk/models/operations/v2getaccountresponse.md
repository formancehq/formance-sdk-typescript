# V2GetAccountResponse

## Example Usage

```typescript
import { V2GetAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetAccountResponse = {
  contentType: "<value>",
  statusCode: 534068,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `v2AccountResponse`                                                         | [shared.V2AccountResponse](../../../sdk/models/shared/v2accountresponse.md) | :heavy_minus_sign:                                                          | OK                                                                          |