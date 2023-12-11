# GetAccountResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountResponse`                                                | [shared.AccountResponse](../../models/shared/accountresponse.md) | :heavy_minus_sign:                                               | OK                                                               |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | HTTP response content type for this operation                    |
| `errorResponse`                                                  | [shared.ErrorResponse](../../models/shared/errorresponse.md)     | :heavy_minus_sign:                                               | Error                                                            |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP response status code for this operation                     |
| `rawResponse`                                                    | [AxiosResponse](https://axios-http.com/docs/res_schema)          | :heavy_minus_sign:                                               | Raw HTTP response; suitable for custom response parsing          |