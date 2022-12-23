# formance.WalletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmHold**](WalletsApi.md#confirmHold) | **POST** /api/wallets/wallets/{id}/holds/{hold_id}/confirm | Confirm a hold
[**createWallet**](WalletsApi.md#createWallet) | **POST** /api/wallets/wallets | Create a new wallet
[**creditWallet**](WalletsApi.md#creditWallet) | **POST** /api/wallets/wallets/{id}/credit | Credit a wallet
[**debitWallet**](WalletsApi.md#debitWallet) | **POST** /api/wallets/wallets/{id}/debit | Debit a wallet
[**getHolds**](WalletsApi.md#getHolds) | **GET** /api/wallets/wallets/{id}/holds | Get all holds for a wallet
[**getWallet**](WalletsApi.md#getWallet) | **GET** /api/wallets/wallets/{id} | Get a wallet
[**getWallets**](WalletsApi.md#getWallets) | **GET** /api/wallets/wallets | Get all wallets
[**updateWallet**](WalletsApi.md#updateWallet) | **PATCH** /api/wallets/wallets/{id} | Update a wallet
[**voidHold**](WalletsApi.md#voidHold) | **POST** /api/wallets/wallets/{id}/holds/{hold_id}/void | Cancel a hold


# **confirmHold**
> void confirmHold()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiConfirmHoldRequest = {
  // string
  id: "id_example",
  // string
  holdId: "hold_id_example",
};

apiInstance.confirmHold(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **holdId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Hold successfully confirmed, funds moved back to initial destination |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWallet**
> CreateWalletResponse createWallet()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiCreateWalletRequest = {
  // CreateWalletRequest (optional)
  createWalletRequest: {
    metadata: {
      "key": null,
    },
    name: "name_example",
  },
};

apiInstance.createWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWalletRequest** | **CreateWalletRequest**|  |


### Return type

**CreateWalletResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Wallet created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **creditWallet**
> void creditWallet()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiCreditWalletRequest = {
  // string
  id: "id_example",
  // CreditWalletRequest (optional)
  creditWalletRequest: {
    amount: {
      asset: "asset_example",
      amount: 3.14,
    },
  },
};

apiInstance.creditWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditWalletRequest** | **CreditWalletRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Wallet successfully credited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **debitWallet**
> DebitWalletResponse | void debitWallet()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiDebitWalletRequest = {
  // string
  id: "id_example",
  // DebitWalletRequest (optional)
  debitWalletRequest: {
    amount: {
      asset: "asset_example",
      amount: 3.14,
    },
    pending: true,
  },
};

apiInstance.debitWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitWalletRequest** | **DebitWalletRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**DebitWalletResponse | void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Wallet successfully debited as a pending hold |  -  |
**204** | Wallet successfully debited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHolds**
> GetHoldsResponse getHolds()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiGetHoldsRequest = {
  // string
  id: "id_example",
};

apiInstance.getHolds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**GetHoldsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Holds |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWallet**
> GetWalletResponse getWallet()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiGetWalletRequest = {
  // string
  id: "id_example",
};

apiInstance.getWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**GetWalletResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Wallet |  -  |
**404** | Wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWallets**
> GetWalletsResponse getWallets()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiGetWalletsRequest = {
  // number | The maximum number of results to return per page (optional)
  pageSize: 100,
  // string | Pagination cursor, will return accounts after given address, in descending order. (optional)
  after: "users:003",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set.  (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

apiInstance.getWallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | The maximum number of results to return per page | (optional) defaults to 15
 **after** | [**string**] | Pagination cursor, will return accounts after given address, in descending order. | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set.  | (optional) defaults to undefined


### Return type

**GetWalletsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWallet**
> void updateWallet()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiUpdateWalletRequest = {
  // string
  id: "id_example",
  // UpdateWalletRequest (optional)
  updateWalletRequest: {
    metadata: {
      "key": null,
    },
  },
};

apiInstance.updateWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWalletRequest** | **UpdateWalletRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Wallet successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **voidHold**
> void voidHold()


### Example


```typescript
import { WalletsApi, createConfiguration } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

let body:WalletsApiVoidHoldRequest = {
  // string
  id: "id_example",
  // string
  holdId: "hold_id_example",
};

apiInstance.voidHold(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **holdId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Hold successfully cancelled, funds returned to wallet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


