# formance.WebhooksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateOneConfig**](WebhooksApi.md#activateOneConfig) | **PUT** /api/webhooks/configs/{id}/activate | Activate one config
[**changeOneConfigSecret**](WebhooksApi.md#changeOneConfigSecret) | **PUT** /api/webhooks/configs/{id}/secret/change | Change the signing secret of a config
[**deactivateOneConfig**](WebhooksApi.md#deactivateOneConfig) | **PUT** /api/webhooks/configs/{id}/deactivate | Deactivate one config
[**deleteOneConfig**](WebhooksApi.md#deleteOneConfig) | **DELETE** /api/webhooks/configs/{id} | Delete one config
[**getManyConfigs**](WebhooksApi.md#getManyConfigs) | **GET** /api/webhooks/configs | Get many configs
[**insertOneConfig**](WebhooksApi.md#insertOneConfig) | **POST** /api/webhooks/configs | Insert a new config 


# **activateOneConfig**
> GetManyConfigs200Response activateOneConfig()


### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiActivateOneConfigRequest = {
  // string | Config ID
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

apiInstance.activateOneConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Config ID | defaults to undefined


### Return type

**GetManyConfigs200Response**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Config successfully activated. |  -  |
**304** | Config not modified, was already activated. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **changeOneConfigSecret**
> GetManyConfigs200Response changeOneConfigSecret()

Change the signing secret of the endpoint of a config.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding) 

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiChangeOneConfigSecretRequest = {
  // string | Config ID
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  // ChangeOneConfigSecretRequest (optional)
  changeOneConfigSecretRequest: {
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  },
};

apiInstance.changeOneConfigSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeOneConfigSecretRequest** | **ChangeOneConfigSecretRequest**|  |
 **id** | [**string**] | Config ID | defaults to undefined


### Return type

**GetManyConfigs200Response**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deactivateOneConfig**
> GetManyConfigs200Response deactivateOneConfig()


### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiDeactivateOneConfigRequest = {
  // string | Config ID
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

apiInstance.deactivateOneConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Config ID | defaults to undefined


### Return type

**GetManyConfigs200Response**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Config successfully deactivated. |  -  |
**304** | Config not modified, was already deactivated. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOneConfig**
> void deleteOneConfig()


### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiDeleteOneConfigRequest = {
  // string | Config ID
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

apiInstance.deleteOneConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Config ID | defaults to undefined


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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getManyConfigs**
> GetManyConfigs200Response getManyConfigs()

Sorted by updated date descending

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiGetManyConfigsRequest = {
  // string | Optional filter by Config ID (optional)
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  // string | Optional filter by endpoint URL (optional)
  endpoint: "https://example.com",
};

apiInstance.getManyConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Optional filter by Config ID | (optional) defaults to undefined
 **endpoint** | [**string**] | Optional filter by endpoint URL | (optional) defaults to undefined


### Return type

**GetManyConfigs200Response**

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

# **insertOneConfig**
> string insertOneConfig(configUser)

Insert a new config.  The endpoint should be a valid https URL and be unique.  The secret is the endpoint's verification secret.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)  All eventTypes are converted to lower-case when inserted. 

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.WebhooksApi(configuration);

let body:formance.WebhooksApiInsertOneConfigRequest = {
  // ConfigUser
  configUser: null,
};

apiInstance.insertOneConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configUser** | **ConfigUser**|  |


### Return type

**string**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Config created successfully, returns its ID. |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


