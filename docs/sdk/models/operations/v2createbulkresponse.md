# V2CreateBulkResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)               | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `v2BulkResponse`                                                      | [shared.V2BulkResponse](../../../sdk/models/shared/v2bulkresponse.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `v2ErrorResponse`                                                     | *errors.V2ErrorResponse*                                              | :heavy_minus_sign:                                                    | Error                                                                 |