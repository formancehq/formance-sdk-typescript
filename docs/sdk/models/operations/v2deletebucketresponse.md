# V2DeleteBucketResponse

## Example Usage

```typescript
import { V2DeleteBucketResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2DeleteBucketResponse = {
  contentType: "<value>",
  statusCode: 299453,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `v2ErrorResponse`                                                       | [shared.V2ErrorResponse](../../../sdk/models/shared/v2errorresponse.md) | :heavy_minus_sign:                                                      | Bucket not found                                                        |