# formance.PaymentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectorsStripeTransfer**](PaymentsApi.md#connectorsStripeTransfer) | **POST** /api/payments/connectors/stripe/transfer | Transfer funds between Stripe accounts
[**getAllConnectors**](PaymentsApi.md#getAllConnectors) | **GET** /api/payments/connectors | Get all installed connectors
[**getAllConnectorsConfigs**](PaymentsApi.md#getAllConnectorsConfigs) | **GET** /api/payments/connectors/configs | Get all available connectors configs
[**getConnectorTask**](PaymentsApi.md#getConnectorTask) | **GET** /api/payments/connectors/{connector}/tasks/{taskId} | Read a specific task of the connector
[**getPayment**](PaymentsApi.md#getPayment) | **GET** /api/payments/payments/{paymentId} | Returns a payment.
[**installConnector**](PaymentsApi.md#installConnector) | **POST** /api/payments/connectors/{connector} | Install connector
[**listConnectorTasks**](PaymentsApi.md#listConnectorTasks) | **GET** /api/payments/connectors/{connector}/tasks | List connector tasks
[**listPayments**](PaymentsApi.md#listPayments) | **GET** /api/payments/payments | Returns a list of payments.
[**readConnectorConfig**](PaymentsApi.md#readConnectorConfig) | **GET** /api/payments/connectors/{connector}/config | Read connector config
[**resetConnector**](PaymentsApi.md#resetConnector) | **POST** /api/payments/connectors/{connector}/reset | Reset connector
[**uninstallConnector**](PaymentsApi.md#uninstallConnector) | **DELETE** /api/payments/connectors/{connector} | Uninstall connector


# **connectorsStripeTransfer**
> void connectorsStripeTransfer(stripeTransferRequest)

Execute a transfer between two Stripe accounts

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiConnectorsStripeTransferRequest = {
  // StripeTransferRequest
  stripeTransferRequest: {
    amount: 100,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
  },
};

apiInstance.connectorsStripeTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripeTransferRequest** | **StripeTransferRequest**|  |


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
**200** | Transfer has been executed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllConnectors**
> ListConnectorsResponse getAllConnectors()

Get all installed connectors

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:any = {};

apiInstance.getAllConnectors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListConnectorsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of installed connectors |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllConnectorsConfigs**
> ListConnectorsConfigsResponse getAllConnectorsConfigs()

Get all available connectors configs

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:any = {};

apiInstance.getAllConnectorsConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListConnectorsConfigsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of available connectors configs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConnectorTask**
> ConnectorTask getConnectorTask()

Get a specific task associated to the connector

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiGetConnectorTaskRequest = {
  // 'stripe' | The connector code
  connector: "stripe",
  // string | The task id
  taskId: "task1",
};

apiInstance.getConnectorTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector** | [**&#39;stripe&#39;**]**Array<&#39;stripe&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined
 **taskId** | [**string**] | The task id | defaults to undefined


### Return type

**ConnectorTask**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified task |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPayment**
> Payment getPayment()


### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiGetPaymentRequest = {
  // string | The payment id
  paymentId: "XXX",
};

apiInstance.getPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | [**string**] | The payment id | defaults to undefined


### Return type

**Payment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A payment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **installConnector**
> void installConnector(connectorConfig)

Install connector

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiInstallConnectorRequest = {
  // 'stripe' | 'dummypay' | 'wise' | 'modulr' | 'currencycloud' | The connector code
  connector: "stripe",
  // ConnectorConfig
  connectorConfig: null,
};

apiInstance.installConnector(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorConfig** | **ConnectorConfig**|  |
 **connector** | [**&#39;stripe&#39; | &#39;dummypay&#39; | &#39;wise&#39; | &#39;modulr&#39; | &#39;currencycloud&#39;**]**Array<&#39;stripe&#39; &#124; &#39;dummypay&#39; &#124; &#39;wise&#39; &#124; &#39;modulr&#39; &#124; &#39;currencycloud&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined


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
**204** | Connector has been installed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnectorTasks**
> Array<ConnectorTask> listConnectorTasks()

List all tasks associated with this connector.

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiListConnectorTasksRequest = {
  // 'stripe' | The connector code
  connector: "stripe",
};

apiInstance.listConnectorTasks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector** | [**&#39;stripe&#39;**]**Array<&#39;stripe&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined


### Return type

**Array<ConnectorTask>**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task list |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPayments**
> ListPaymentsResponse listPayments()


### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiListPaymentsRequest = {
  // number | Limit the number of payments to return, pagination can be achieved in conjunction with 'skip' parameter. (optional)
  limit: 10,
  // number | How many payments to skip, pagination can be achieved in conjunction with 'limit' parameter. (optional)
  skip: 100,
  // Array<string> | Field used to sort payments (Default is by date). (optional)
  sort: [
    "status",
  ],
};

apiInstance.listPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit the number of payments to return, pagination can be achieved in conjunction with &#39;skip&#39; parameter. | (optional) defaults to undefined
 **skip** | [**number**] | How many payments to skip, pagination can be achieved in conjunction with &#39;limit&#39; parameter. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Field used to sort payments (Default is by date). | (optional) defaults to undefined


### Return type

**ListPaymentsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of payments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readConnectorConfig**
> ConnectorConfig readConnectorConfig()

Read connector config

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiReadConnectorConfigRequest = {
  // 'stripe' | The connector code
  connector: "stripe",
};

apiInstance.readConnectorConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector** | [**&#39;stripe&#39;**]**Array<&#39;stripe&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined


### Return type

**ConnectorConfig**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector config |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetConnector**
> void resetConnector()

Reset connector. Will remove the connector and ALL PAYMENTS generated with it.

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiResetConnectorRequest = {
  // 'stripe' | The connector code
  connector: "stripe",
};

apiInstance.resetConnector(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector** | [**&#39;stripe&#39;**]**Array<&#39;stripe&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined


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
**204** | Connector has been reset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uninstallConnector**
> void uninstallConnector()

Uninstall  connector

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.PaymentsApi(configuration);

let body:formance.PaymentsApiUninstallConnectorRequest = {
  // 'stripe' | The connector code
  connector: "stripe",
};

apiInstance.uninstallConnector(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connector** | [**&#39;stripe&#39;**]**Array<&#39;stripe&#39; &#124; &#39;11184809&#39;>** | The connector code | defaults to undefined


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
**204** | Connector has been uninstalled |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


