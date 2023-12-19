# V2GetAccountResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |
| `v2AccountResponse`                                                  | [shared.V2AccountResponse](../../models/shared/v2accountresponse.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `v2ErrorResponse`                                                    | [shared.V2ErrorResponse](../../models/shared/v2errorresponse.md)     | :heavy_minus_sign:                                                   | Error                                                                |