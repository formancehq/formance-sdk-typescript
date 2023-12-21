# Search
(*search*)

### Available Operations

* [search](#search) - Search
* [searchgetServerInfo](#searchgetserverinfo) - Get server info

## search

ElasticSearch query engine

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK();

  const res = await sdk.search.search({
    after: [
      "u",
      "s",
      "e",
      "r",
      "s",
      ":",
      "0",
      "0",
      "2",
    ],
    cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    ledgers: [
      "q",
      "u",
      "i",
      "c",
      "k",
      "s",
      "t",
      "a",
      "r",
      "t",
    ],
    policy: "OR",
    raw: {},
    sort: "id:asc",
    terms: [
      "d",
      "e",
      "s",
      "t",
      "i",
      "n",
      "a",
      "t",
      "i",
      "o",
      "n",
      "=",
      "c",
      "e",
      "n",
      "t",
      "r",
      "a",
      "l",
      "_",
      "b",
      "a",
      "n",
      "k",
      "1",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Query](../../models/shared/query.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchResponse](../../models/operations/searchresponse.md)>**


## searchgetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK();

  const res = await sdk.search.searchgetServerInfo();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchgetServerInfoResponse](../../models/operations/searchgetserverinforesponse.md)>**

