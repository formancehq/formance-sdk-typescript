# ListBalancesResponse


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `listBalancesResponse`                                                     | [shared.ListBalancesResponse](../../models/shared/listbalancesresponse.md) | :heavy_minus_sign:                                                         | Balances list                                                              |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)                    | :heavy_minus_sign:                                                         | Raw HTTP response; suitable for custom response parsing                    |