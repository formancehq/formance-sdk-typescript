# formance.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBalance**](DefaultApi.md#createBalance) | **POST** /api/wallets/wallets/{id}/balances | Create a balance
[**getBalance**](DefaultApi.md#getBalance) | **GET** /api/wallets/wallets/{id}/balances/{balanceName} | Get detailed balance
[**getServerInfo**](DefaultApi.md#getServerInfo) | **GET** /api/auth/_info | Get server info
[**listBalances**](DefaultApi.md#listBalances) | **GET** /api/wallets/wallets/{id}/balances | List balances of a wallet
[**searchgetServerInfo**](DefaultApi.md#searchgetServerInfo) | **GET** /api/search/_info | Get server info
[**walletsgetServerInfo**](DefaultApi.md#walletsgetServerInfo) | **GET** /api/wallets/_info | Get server info


# **createBalance**
> CreateBalanceResponse createBalance()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:DefaultApiCreateBalanceRequest = {
  // string
  id: "id_example",
  // Balance (optional)
  body: {
    name: "name_example",
  },
};

apiInstance.createBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Balance**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**CreateBalanceResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created balance |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalance**
> GetBalanceResponse getBalance()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:DefaultApiGetBalanceRequest = {
  // string
  id: "id_example",
  // string
  balanceName: "balanceName_example",
};

apiInstance.getBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **balanceName** | [**string**] |  | defaults to undefined


### Return type

**GetBalanceResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Balance summary |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerInfo**
> ServerInfo getServerInfo()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:any = {};

apiInstance.getServerInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ServerInfo**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBalances**
> ListBalancesResponse listBalances()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:DefaultApiListBalancesRequest = {
  // string
  id: "id_example",
};

apiInstance.listBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**ListBalancesResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Balances list |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchgetServerInfo**
> ServerInfo searchgetServerInfo()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:any = {};

apiInstance.searchgetServerInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ServerInfo**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletsgetServerInfo**
> ServerInfo walletsgetServerInfo()


### Example


```typescript
import { DefaultApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

let body:any = {};

apiInstance.walletsgetServerInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ServerInfo**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


