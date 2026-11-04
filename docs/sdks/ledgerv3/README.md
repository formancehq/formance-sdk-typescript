# Ledger.V3

## Overview

### Available Operations

* [addAccountType](#addaccounttype) - Add an account type
* [aggregateVolumes](#aggregatevolumes) - Aggregate volumes
* [analyzeAccounts](#analyzeaccounts) - Analyze accounts and suggest a Chart of Accounts
* [analyzeNumscript](#analyzenumscript) - Analyze Numscript source
* [analyzeTransactions](#analyzetransactions) - Analyze transaction flow patterns
* [bulkOperations](#bulkoperations) - Bulk operations
* [clusterz](#clusterz) - Cluster-availability probe
* [createIndex](#createindex) - Create an index on a ledger
* [createLedger](#createledger) - Create a new ledger
* [createPreparedQuery](#createpreparedquery) - Create a prepared query
* [createTransactionLedgerV3](#createtransactionledgerv3) - Create a new transaction
* [deleteAccountMetadata](#deleteaccountmetadata) - Delete account metadata
* [deleteLedger](#deleteledger) - Delete a ledger
* [deleteLedgerMetadata](#deleteledgermetadata) - Delete ledger metadata
* [deletePreparedQuery](#deletepreparedquery) - Delete a prepared query
* [deleteTransactionMetadata](#deletetransactionmetadata) - Delete transaction metadata
* [dropIndex](#dropindex) - Drop an index from a ledger
* [executePreparedQuery](#executepreparedquery) - Execute a prepared query
* [getAccountType](#getaccounttype) - Get an account type
* [getAccountLedgerV3](#getaccountledgerv3) - Get an account
* [getAuditEntry](#getauditentry) - Get an audit entry
* [getBucketIndex](#getbucketindex) - Get a single bucket-scoped index registry entry
* [getBucketIndexEntryStatus](#getbucketindexentrystatus) - Get the per-replica status of a single bucket-scoped index
* [getEventsSinks](#geteventssinks) - List configured event sinks
* [getIndex](#getindex) - Get a single index registry entry
* [getIndexEntryStatus](#getindexentrystatus) - Get the per-replica status of a single index
* [getIndexStatus](#getindexstatus) - Get aggregated index registry status
* [getLedger](#getledger) - Get a ledger
* [getLedgerStats](#getledgerstats) - Get ledger statistics
* [getLog](#getlog) - Get a single system log by bucket-wide sequence
* [getMetadataSchemaStatus](#getmetadataschemastatus) - Get metadata schema
* [getNumscript](#getnumscript) - Get a numscript
* [getNumscriptUsage](#getnumscriptusage) - Get template usage
* [getTransactionLedgerV3](#gettransactionledgerv3) - Get a transaction
* [health](#health) - Health check
* [info](#info) - Get server build information
* [inspectIndex](#inspectindex) - Inspect a metadata index
* [listAccountTypes](#listaccounttypes) - List account types
* [listAccountsLedgerV3](#listaccountsledgerv3) - List accounts
* [listAllLedgers](#listallledgers) - List all ledgers
* [listAuditEntries](#listauditentries) - List audit entries
* [listBucketIndexes](#listbucketindexes) - List bucket-wide indexes
* [listLedgerIndexes](#listledgerindexes) - List indexes for a ledger
* [listLedgerLogs](#listledgerlogs) - List logs for a ledger
* [listLedgerTransactions](#listledgertransactions) - List transactions for a ledger
* [listNumscriptVersions](#listnumscriptversions) - List numscript versions
* [listNumscripts](#listnumscripts) - List all numscripts
* [listPreparedQueries](#listpreparedqueries) - List prepared queries
* [listSigningKeys](#listsigningkeys) - List registered Ed25519 signing keys
* [livez](#livez) - Liveness probe
* [promoteLedger](#promoteledger) - Promote a mirror ledger
* [readyz](#readyz) - Readiness probe
* [removeAccountType](#removeaccounttype) - Remove an account type
* [removeEventsSink](#removeeventssink) - Remove an event sink
* [removeMetadataFieldType](#removemetadatafieldtype) - Remove metadata field type
* [revertTransactionLedgerV3](#reverttransactionledgerv3) - Revert a transaction
* [saveAccountMetadata](#saveaccountmetadata) - Save account metadata
* [saveLedgerMetadata](#saveledgermetadata) - Save ledger metadata
* [saveNumscript](#savenumscript) - Save a numscript
* [saveTransactionMetadata](#savetransactionmetadata) - Save transaction metadata
* [setDefaultEnforcementMode](#setdefaultenforcementmode) - Set default enforcement mode
* [setMetadataFieldType](#setmetadatafieldtype) - Set metadata field type
* [updatePreparedQuery](#updatepreparedquery) - Update a prepared query

## addAccountType

Adds a new account type to a ledger's chart of accounts. Account types define
address patterns for account validation. Requires `ledger:WriteMetadata` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addAccountType" method="post" path="/api/ledger/v3/{ledgerName}/account-types" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.addAccountType({
    addAccountTypeRequest: {
      name: "user-checking",
      pattern: "users:{id}:checking",
      persistence: "EPHEMERAL",
      segmentTypes: {
        "id": {
          type: "uuid",
        },
      },
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3AddAccountType } from "@formance/formance-sdk/funcs/ledgerV3AddAccountType.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3AddAccountType(sdk, {
    addAccountTypeRequest: {
      name: "user-checking",
      pattern: "users:{id}:checking",
      persistence: "EPHEMERAL",
      segmentTypes: {
        "id": {
          type: "uuid",
        },
      },
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3AddAccountType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddAccountTypeRequest](../../sdk/models/operations/addaccounttyperequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AddAccountTypeSecurity](../../sdk/models/operations/addaccounttypesecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddAccountTypeResponse](../../sdk/models/operations/addaccounttyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## aggregateVolumes

Returns aggregated volumes (input/output/balance per asset) across all accounts in the ledger.
Supports filtering accounts with the generic `filter` parameter, grouping by account prefixes,
and max-precision merging.
Requires `ledger:ReadAccount` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="aggregateVolumes" method="get" path="/api/ledger/v3/{ledgerName}/volumes" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.aggregateVolumes({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3AggregateVolumes } from "@formance/formance-sdk/funcs/ledgerV3AggregateVolumes.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3AggregateVolumes(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3AggregateVolumes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AggregateVolumesRequest](../../sdk/models/operations/aggregatevolumesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AggregateVolumesSecurity](../../sdk/models/operations/aggregatevolumessecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AggregateVolumesResponse](../../sdk/models/operations/aggregatevolumesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## analyzeAccounts

Scans all accounts in a ledger, discovers address patterns, and returns a
suggested Chart of Accounts. Useful after a mirror import to understand
account structure. Requires `ledger:read` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="analyzeAccounts" method="get" path="/api/ledger/v3/{ledgerName}/analyze-accounts" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.analyzeAccounts({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3AnalyzeAccounts } from "@formance/formance-sdk/funcs/ledgerV3AnalyzeAccounts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3AnalyzeAccounts(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3AnalyzeAccounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AnalyzeAccountsRequest](../../sdk/models/operations/analyzeaccountsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AnalyzeAccountsSecurity](../../sdk/models/operations/analyzeaccountssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeAccountsResponse](../../sdk/models/operations/analyzeaccountsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## analyzeNumscript

Validates Numscript v1 and returns the external input schema without reading or changing ledger state. Recognized source failures are returned as diagnostics with an empty input list. Sources over 64 KiB or with more than 32 block-comment open markers receive a syntax diagnostic; internal failures return a server error.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="analyzeNumscript" method="post" path="/api/ledger/v3/numscripts/analyze" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.analyzeNumscript({
    source: "<value>",
    version: "v1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3AnalyzeNumscript } from "@formance/formance-sdk/funcs/ledgerV3AnalyzeNumscript.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3AnalyzeNumscript(sdk, {
    source: "<value>",
    version: "v1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3AnalyzeNumscript failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ledgerV3.AnalyzeNumscriptRequest](../../sdk/models/ledgerV3/analyzenumscriptrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AnalyzeNumscriptSecurity](../../sdk/models/operations/analyzenumscriptsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeNumscriptResponse](../../sdk/models/operations/analyzenumscriptresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## analyzeTransactions

Scans all transactions in a ledger, discovers flow patterns by normalizing
account addresses, and returns statistics per flow type including temporal
distribution and volume metrics. Requires `ledger:read` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="analyzeTransactions" method="get" path="/api/ledger/v3/{ledgerName}/analyze-transactions" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.analyzeTransactions({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3AnalyzeTransactions } from "@formance/formance-sdk/funcs/ledgerV3AnalyzeTransactions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3AnalyzeTransactions(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3AnalyzeTransactions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AnalyzeTransactionsRequest](../../sdk/models/operations/analyzetransactionsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AnalyzeTransactionsSecurity](../../sdk/models/operations/analyzetransactionssecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeTransactionsResponse](../../sdk/models/operations/analyzetransactionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## bulkOperations

Execute multiple operations (create transactions, add metadata,
revert transactions, delete metadata) in a single request. Requires
`ledger:write` scope.

With `atomic=true`, all elements target the URL's ledger and are
submitted as one batch. `Idempotency-Key` identifies that whole batch;
per-element `ik` values are ignored. With `atomic=false`
(default), each element is submitted separately under its own
`ik`; the header is ignored.

`continueOnFailure` controls sequential continuation and business-error
status rollup. It does not allow partial application of an atomic
batch. Non-atomic failures can follow already committed elements:
inspect every result and preserve the original identities when retrying.
A timeout or infrastructure failure does not prove that work was not
committed. This contract does not enable automatic SDK retries.

The response status is decided in three tiers:

1. **Request-level failures** (before per-element processing):
   malformed body → `400`, missing/insufficient scope → `401` or
   `403`, too many elements → `413`. Exceeding the byte limit while
   decoding the body currently returns `400`.
   Returned unconditionally, `continueOnFailure` does not apply.
2. **Infrastructure failures during processing** (transport
   timeout, cache-horizon exceeded, storage error): the overall
   status is `503` for retryable failures and `500` otherwise,
   regardless of `continueOnFailure`. Callers
   must inspect the element outcomes before deciding what to retry.
3. **Per-element errors during processing**: each element's error
   carries the HTTP status it would surface as a single request
   (via the same mapping `handleError` uses). The top-level
   status is the "worst" of them, with `continueOnFailure`
   applying only to per-element business failures (4xx):
   - Business failures (validation, not-found, conflict,
     precondition, permission — 4xx): rolled up per
     `continueOnFailure`. `true` → `200`; `false` (default) →
     the highest 4xx among failing elements (typically `400`).
   - Resource exhaustion (`KindResourceExhausted`, `429`), including
     rate limits and permanent authoritative-sequence exhaustion:
     surface unconditionally as `429`.
   - Retryable infrastructure failures (leader loss,
     cache-horizon exceeded, `KindUnavailable`): surface as
     `503` with `Retry-After: 1`, regardless of
     `continueOnFailure`.
   - Non-retryable infrastructure failures (transport / storage
     errors, `KindInternal`, unclassified): surface as `500`.
   - Aborted elements (`context.Canceled` from the sequential
     runner after a prior failure): contribute nothing — the
     originating error drives the rollup.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulkOperations" method="post" path="/api/ledger/v3/{ledgerName}/bulk" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.bulkOperations({
    formanceBigintAsString: "true",
    requestBody: [
      {
        action: "DELETE_METADATA",
        data: {
          force: false,
        },
      },
    ],
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3BulkOperations } from "@formance/formance-sdk/funcs/ledgerV3BulkOperations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3BulkOperations(sdk, {
    formanceBigintAsString: "true",
    requestBody: [
      {
        action: "DELETE_METADATA",
        data: {
          force: false,
        },
      },
    ],
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3BulkOperations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkOperationsRequest](../../sdk/models/operations/bulkoperationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.BulkOperationsSecurity](../../sdk/models/operations/bulkoperationssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BulkOperationsResponse](../../sdk/models/operations/bulkoperationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## clusterz

Returns 200 only when the node is part of a healthy cluster (Raft state
healthy and a leader elected). Disk and clock skew gate writes (see
admission), not cluster readiness. Returns 503 otherwise. Use this
for external monitoring or any client that needs to wait until the node
can actually serve cluster-dependent traffic. Kubernetes readiness
probes should target `/readyz` instead — this endpoint MUST NOT gate
StatefulSet ordering, otherwise the cluster cannot recover from a
full-kill cold start.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="clusterz" method="get" path="/api/ledger/clusterz" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.clusterz();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3Clusterz } from "@formance/formance-sdk/funcs/ledgerV3Clusterz.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3Clusterz(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3Clusterz failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.ClusterzSecurity](../../sdk/models/operations/clusterzsecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ClusterzResponse](../../sdk/models/operations/clusterzresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createIndex

Registers a new index on the ledger. An existing canonical index on
this ledger is rejected with `INDEX_ALREADY_EXISTS` (HTTP 409), even
while building or retyping, without changing its definition or progress.
Replaying an identical batch with its retained `Idempotency-Key` returns
the original result. The indexbuilder processes the accepted creation.
The request body carries the target `IndexID` in
canonical form (see `DELETE /v3/{ledgerName}/indexes/{canonicalId}`
for the format). Requires `ledger:WriteLedger` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createIndex" method="post" path="/api/ledger/v3/{ledgerName}/indexes" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.createIndex({
    requestBody: {
      id: "metadata:TARGET_TYPE_ACCOUNT:color",
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3CreateIndex } from "@formance/formance-sdk/funcs/ledgerV3CreateIndex.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3CreateIndex(sdk, {
    requestBody: {
      id: "metadata:TARGET_TYPE_ACCOUNT:color",
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3CreateIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIndexRequest](../../sdk/models/operations/createindexrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateIndexSecurity](../../sdk/models/operations/createindexsecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateIndexResponse](../../sdk/models/operations/createindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLedger

Creates a new ledger with the specified name. Storage is configured at the server level.
Each ledger has its own Raft group for data consistency. Requires `ledger:write` scope.

The ledger name `_` is reserved: all system / non-ledger routes live
under the `/v3/_/…` segment (e.g. `/v3/_/audit-entries`), so a ledger
named `_` would be unreachable over REST. Creating it is rejected with a
validation error. The exact name `_system` is also reserved for system
events and rejected. Other underscore-prefixed names remain valid.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLedger" method="post" path="/api/ledger/v3/{ledgerName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.createLedger({
    createLedgerRequest: {
      accountTypes: {
        "user-checking": {
          name: "user-checking",
          pattern: "users:{id}:checking",
          persistence: "EPHEMERAL",
          segmentTypes: {
            "id": {
              type: "uuid",
            },
          },
        },
      },
      initialSchema: [
        {
          key: "color",
          targetType: "ledger",
          type: "string",
        },
      ],
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3CreateLedger } from "@formance/formance-sdk/funcs/ledgerV3CreateLedger.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3CreateLedger(sdk, {
    createLedgerRequest: {
      accountTypes: {
        "user-checking": {
          name: "user-checking",
          pattern: "users:{id}:checking",
          persistence: "EPHEMERAL",
          segmentTypes: {
            "id": {
              type: "uuid",
            },
          },
        },
      },
      initialSchema: [
        {
          key: "color",
          targetType: "ledger",
          type: "string",
        },
      ],
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3CreateLedger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLedgerRequest](../../sdk/models/operations/createledgerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateLedgerSecurity](../../sdk/models/operations/createledgersecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateLedgerResponse](../../sdk/models/operations/createledgerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPreparedQuery

Creates a new prepared query for a ledger. A prepared query defines a reusable
filter that can be executed later with parameter substitution. Requires `ledger:WriteQuery` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPreparedQuery" method="post" path="/api/ledger/v3/{ledgerName}/prepared-queries" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.createPreparedQuery({
    createPreparedQueryRequest: {
      name: "<value>",
      target: "ACCOUNTS",
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3CreatePreparedQuery } from "@formance/formance-sdk/funcs/ledgerV3CreatePreparedQuery.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3CreatePreparedQuery(sdk, {
    createPreparedQueryRequest: {
      name: "<value>",
      target: "ACCOUNTS",
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3CreatePreparedQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePreparedQueryRequest](../../sdk/models/operations/createpreparedqueryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreatePreparedQuerySecurity](../../sdk/models/operations/createpreparedquerysecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePreparedQueryResponse](../../sdk/models/operations/createpreparedqueryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTransactionLedgerV3

Creates a new transaction in the specified ledger with the specified postings. Requires `ledger:write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTransaction_ledgerV3" method="post" path="/api/ledger/v3/{ledgerName}/transactions" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.createTransactionLedgerV3({
    createTransactionRequest: {},
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3CreateTransactionLedgerV3 } from "@formance/formance-sdk/funcs/ledgerV3CreateTransactionLedgerV3.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3CreateTransactionLedgerV3(sdk, {
    createTransactionRequest: {},
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3CreateTransactionLedgerV3 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransactionLedgerV3Request](../../sdk/models/operations/createtransactionledgerv3request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateTransactionLedgerV3Security](../../sdk/models/operations/createtransactionledgerv3security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransactionLedgerV3Response](../../sdk/models/operations/createtransactionledgerv3response.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteAccountMetadata

Deletes a metadata key for a specific account in the ledger. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAccountMetadata" method="delete" path="/api/ledger/v3/{ledgerName}/accounts/{address}/metadata/{key}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.deleteAccountMetadata({
    address: "users:001",
    key: "formance.com/reviewed",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DeleteAccountMetadata } from "@formance/formance-sdk/funcs/ledgerV3DeleteAccountMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DeleteAccountMetadata(sdk, {
    address: "users:001",
    key: "formance.com/reviewed",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DeleteAccountMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAccountMetadataRequest](../../sdk/models/operations/deleteaccountmetadatarequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteAccountMetadataSecurity](../../sdk/models/operations/deleteaccountmetadatasecurity.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteAccountMetadataResponse](../../sdk/models/operations/deleteaccountmetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteLedger

Deletes a ledger by its name. This operation removes the ledger and its associated Raft group from the cluster. Requires `ledger:write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteLedger" method="delete" path="/api/ledger/v3/{ledgerName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.deleteLedger({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DeleteLedger } from "@formance/formance-sdk/funcs/ledgerV3DeleteLedger.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DeleteLedger(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DeleteLedger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLedgerRequest](../../sdk/models/operations/deleteledgerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteLedgerSecurity](../../sdk/models/operations/deleteledgersecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteLedgerResponse](../../sdk/models/operations/deleteledgerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteLedgerMetadata

Deletes a metadata key from the ledger. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteLedgerMetadata" method="delete" path="/api/ledger/v3/{ledgerName}/metadata/{key}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.deleteLedgerMetadata({
    key: "formance.com/reviewed",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DeleteLedgerMetadata } from "@formance/formance-sdk/funcs/ledgerV3DeleteLedgerMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DeleteLedgerMetadata(sdk, {
    key: "formance.com/reviewed",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DeleteLedgerMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLedgerMetadataRequest](../../sdk/models/operations/deleteledgermetadatarequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteLedgerMetadataSecurity](../../sdk/models/operations/deleteledgermetadatasecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteLedgerMetadataResponse](../../sdk/models/operations/deleteledgermetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deletePreparedQuery

Deletes a prepared query from a ledger. Requires `ledger:WriteQuery` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePreparedQuery" method="delete" path="/api/ledger/v3/{ledgerName}/prepared-queries/{queryName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.deletePreparedQuery({
    ledgerName: "<value>",
    queryName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DeletePreparedQuery } from "@formance/formance-sdk/funcs/ledgerV3DeletePreparedQuery.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DeletePreparedQuery(sdk, {
    ledgerName: "<value>",
    queryName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DeletePreparedQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePreparedQueryRequest](../../sdk/models/operations/deletepreparedqueryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeletePreparedQuerySecurity](../../sdk/models/operations/deletepreparedquerysecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePreparedQueryResponse](../../sdk/models/operations/deletepreparedqueryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteTransactionMetadata

Deletes a metadata key for a specific transaction in the ledger. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteTransactionMetadata" method="delete" path="/api/ledger/v3/{ledgerName}/transactions/{transactionId}/metadata/{key}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.deleteTransactionMetadata({
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    transactionId: 220958,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DeleteTransactionMetadata } from "@formance/formance-sdk/funcs/ledgerV3DeleteTransactionMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DeleteTransactionMetadata(sdk, {
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    transactionId: 220958,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DeleteTransactionMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTransactionMetadataRequest](../../sdk/models/operations/deletetransactionmetadatarequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteTransactionMetadataSecurity](../../sdk/models/operations/deletetransactionmetadatasecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTransactionMetadataResponse](../../sdk/models/operations/deletetransactionmetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## dropIndex

Removes an index from a ledger. The path parameter carries the target
`IndexID` in canonical form (e.g. `metadata:TARGET_TYPE_ACCOUNT:color`,
`tx_builtin:TX_BUILTIN_INDEX_TIMESTAMP`). Requires `ledger:WriteLedger` scope.

The drop is idempotent. An `IndexID` that has no registry entry on the
ledger (never created, or already dropped) also answers `204`, and each
committed drop appends a `DROP_INDEX` entry to the ledger log. A
mistyped canonical id is therefore not reported; read the index with
`GET /v3/{ledgerName}/indexes/{canonicalId}` first when the caller must
know that it exists. `404` means that the ledger does not exist.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="dropIndex" method="delete" path="/api/ledger/v3/{ledgerName}/indexes/{canonicalId}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.dropIndex({
    canonicalId: "<id>",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3DropIndex } from "@formance/formance-sdk/funcs/ledgerV3DropIndex.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3DropIndex(sdk, {
    canonicalId: "<id>",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3DropIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DropIndexRequest](../../sdk/models/operations/dropindexrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DropIndexSecurity](../../sdk/models/operations/dropindexsecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DropIndexResponse](../../sdk/models/operations/dropindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## executePreparedQuery

Executes a prepared query with optional parameter substitution. Supports LIST and
AGGREGATE_VOLUMES modes. LIST uses cursor pagination with an effective page size
of 100 when omitted or zero, capped at 1000 before collecting and enriching rows.
AGGREGATE_VOLUMES ignores pageSize and aggregates all matching accounts. Also
accepts pageSize, cursor and reverse as query parameters. Supplied pageSize and
reverse values, and nonempty cursor values, override the body. Requires `ledger:ReadQuery` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="executePreparedQuery" method="post" path="/api/ledger/v3/{ledgerName}/prepared-queries/{queryName}/execute" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.executePreparedQuery({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    queryName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ExecutePreparedQuery } from "@formance/formance-sdk/funcs/ledgerV3ExecutePreparedQuery.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ExecutePreparedQuery(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    queryName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ExecutePreparedQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExecutePreparedQueryRequest](../../sdk/models/operations/executepreparedqueryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExecutePreparedQuerySecurity](../../sdk/models/operations/executepreparedquerysecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExecutePreparedQueryResponse](../../sdk/models/operations/executepreparedqueryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountType

Retrieves a specific account type by name from a ledger. Requires `ledger:ReadAccount` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountType" method="get" path="/api/ledger/v3/{ledgerName}/account-types/{typeName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getAccountType({
    ledgerName: "<value>",
    typeName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetAccountType } from "@formance/formance-sdk/funcs/ledgerV3GetAccountType.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetAccountType(sdk, {
    ledgerName: "<value>",
    typeName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetAccountType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountTypeRequest](../../sdk/models/operations/getaccounttyperequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAccountTypeSecurity](../../sdk/models/operations/getaccounttypesecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAccountTypeResponse](../../sdk/models/operations/getaccounttyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountLedgerV3

Retrieves account information including metadata for a specific account address. Requires `ledger:read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccount_ledgerV3" method="get" path="/api/ledger/v3/{ledgerName}/accounts/{address}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getAccountLedgerV3({
    formanceBigintAsString: "true",
    address: "users:001",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetAccountLedgerV3 } from "@formance/formance-sdk/funcs/ledgerV3GetAccountLedgerV3.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetAccountLedgerV3(sdk, {
    formanceBigintAsString: "true",
    address: "users:001",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetAccountLedgerV3 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountLedgerV3Request](../../sdk/models/operations/getaccountledgerv3request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAccountLedgerV3Security](../../sdk/models/operations/getaccountledgerv3security.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAccountLedgerV3Response](../../sdk/models/operations/getaccountledgerv3response.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAuditEntry

Returns a single audit entry by its global sequence, with per-order
`items` populated (the list endpoint omits `items` for compactness).
Requires `ledger:ReadAudit` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAuditEntry" method="get" path="/api/ledger/v3/_/audit-entries/{sequence}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getAuditEntry({
    sequence: 411754,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetAuditEntry } from "@formance/formance-sdk/funcs/ledgerV3GetAuditEntry.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetAuditEntry(sdk, {
    sequence: 411754,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetAuditEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuditEntryRequest](../../sdk/models/operations/getauditentryrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAuditEntrySecurity](../../sdk/models/operations/getauditentrysecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAuditEntryResponse](../../sdk/models/operations/getauditentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBucketIndex

Returns the `Index` registry entry for a bucket-scoped index
(`Ledger == ""`, e.g. audit indexes). Ledger-scoped lookups go
through `GET /v3/{ledgerName}/indexes/{canonicalId}` — the two
keyspaces are distinct so a bucket-scoped lookup with the same
canonical will NotFound if only the ledger-scoped entry exists.
Requires `ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBucketIndex" method="get" path="/api/ledger/v3/_/indexes/{canonicalId}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getBucketIndex({
    canonicalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetBucketIndex } from "@formance/formance-sdk/funcs/ledgerV3GetBucketIndex.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetBucketIndex(sdk, {
    canonicalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetBucketIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBucketIndexRequest](../../sdk/models/operations/getbucketindexrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetBucketIndexSecurity](../../sdk/models/operations/getbucketindexsecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBucketIndexResponse](../../sdk/models/operations/getbucketindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBucketIndexEntryStatus

Returns the `IndexEntry` (registry entry + backfill cursor +
per-replica IndexVersionState) for a bucket-scoped index.
Requires `ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBucketIndexEntryStatus" method="get" path="/api/ledger/v3/_/indexes/{canonicalId}/status" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getBucketIndexEntryStatus({
    canonicalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetBucketIndexEntryStatus } from "@formance/formance-sdk/funcs/ledgerV3GetBucketIndexEntryStatus.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetBucketIndexEntryStatus(sdk, {
    canonicalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetBucketIndexEntryStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBucketIndexEntryStatusRequest](../../sdk/models/operations/getbucketindexentrystatusrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetBucketIndexEntryStatusSecurity](../../sdk/models/operations/getbucketindexentrystatussecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBucketIndexEntryStatusResponse](../../sdk/models/operations/getbucketindexentrystatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEventsSinks

Returns every event sink configured on the cluster. Requires
`ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEventsSinks" method="get" path="/api/ledger/v3/_/events-sinks" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getEventsSinks({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetEventsSinks } from "@formance/formance-sdk/funcs/ledgerV3GetEventsSinks.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetEventsSinks(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetEventsSinks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventsSinksRequest](../../sdk/models/operations/geteventssinksrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetEventsSinksSecurity](../../sdk/models/operations/geteventssinkssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventsSinksResponse](../../sdk/models/operations/geteventssinksresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getIndex

Returns the `Index` registry entry (id, ledger, createdAt,
forwardEncodingVersion) for a single index, serialized in
protobuf-JSON camelCase. Requires `ledger:ReadLedger` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIndex" method="get" path="/api/ledger/v3/{ledgerName}/indexes/{canonicalId}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getIndex({
    canonicalId: "<id>",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetIndex } from "@formance/formance-sdk/funcs/ledgerV3GetIndex.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetIndex(sdk, {
    canonicalId: "<id>",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIndexRequest](../../sdk/models/operations/getindexrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetIndexSecurity](../../sdk/models/operations/getindexsecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIndexResponse](../../sdk/models/operations/getindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getIndexEntryStatus

Returns the `IndexEntry` for a single index — the registry entry
joined with the backfill cursor and the per-replica
IndexVersionState (current + pending version). Use this to poll
for backfill completion after a `POST /v3/{ledgerName}/indexes`.
Requires `ledger:ReadLedger` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIndexEntryStatus" method="get" path="/api/ledger/v3/{ledgerName}/indexes/{canonicalId}/status" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getIndexEntryStatus({
    canonicalId: "<id>",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetIndexEntryStatus } from "@formance/formance-sdk/funcs/ledgerV3GetIndexEntryStatus.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetIndexEntryStatus(sdk, {
    canonicalId: "<id>",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetIndexEntryStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIndexEntryStatusRequest](../../sdk/models/operations/getindexentrystatusrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetIndexEntryStatusSecurity](../../sdk/models/operations/getindexentrystatussecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIndexEntryStatusResponse](../../sdk/models/operations/getindexentrystatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getIndexStatus

Returns the aggregated index registry status: per-index backfill cursor,
per-replica IndexVersionState (current/pending), and cluster-wide
counters (LastIndexedSequence, LastLogSequence, Lag, IndexFileSize).
The optional `ledger` query parameter narrows the per-index entries to
a single ledger; the aggregated counters always cover the bucket.
Requires `ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIndexStatus" method="get" path="/api/ledger/v3/_/indexes/status" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getIndexStatus({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetIndexStatus } from "@formance/formance-sdk/funcs/ledgerV3GetIndexStatus.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetIndexStatus(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetIndexStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIndexStatusRequest](../../sdk/models/operations/getindexstatusrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetIndexStatusSecurity](../../sdk/models/operations/getindexstatussecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIndexStatusResponse](../../sdk/models/operations/getindexstatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLedger

Retrieves a ledger by its name. Requires `ledger:read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLedger" method="get" path="/api/ledger/v3/{ledgerName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getLedger({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetLedger } from "@formance/formance-sdk/funcs/ledgerV3GetLedger.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetLedger(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetLedger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLedgerRequest](../../sdk/models/operations/getledgerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetLedgerSecurity](../../sdk/models/operations/getledgersecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLedgerResponse](../../sdk/models/operations/getledgerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLedgerStats

Returns aggregate usage statistics (transaction, volume, reference, posting, log, revert and Numscript-execution counts, plus ephemeral-evicted and transient-used volume tallies) for a ledger. Requires `ledger:read` scope. On live reads, `transactionCount` and `logCount` are FSM-backed. The seven usage-derived counters (`postingCount`, `revertCount`, `numscriptExecutionCount`, `referenceCount`, `ephemeralEvictedCount`, `transientUsedCount`, `volumeCount`) are materialised asynchronously in the serving replica's usagestore and may lag committed state even after the request's ReadIndex barrier. Note: for checkpoint-scoped (historical) reads, only `transactionCount` and `logCount` are checkpoint-consistent; the usage-derived counters (`postingCount`, `revertCount`, `numscriptExecutionCount`, `referenceCount`, `ephemeralEvictedCount`, `transientUsedCount`, `volumeCount`) are sourced from the live usagestore projection, which is not checkpoint-aware, and are returned as `0` at a checkpoint rather than a live value — treat `0` on a checkpoint read as "not available at this checkpoint".

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLedgerStats" method="get" path="/api/ledger/v3/{ledgerName}/stats" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getLedgerStats({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetLedgerStats } from "@formance/formance-sdk/funcs/ledgerV3GetLedgerStats.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetLedgerStats(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetLedgerStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLedgerStatsRequest](../../sdk/models/operations/getledgerstatsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetLedgerStatsSecurity](../../sdk/models/operations/getledgerstatssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLedgerStatsResponse](../../sdk/models/operations/getledgerstatsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLog

Returns the system log entry with the given bucket-wide sequence number.
Requires `ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLog" method="get" path="/api/ledger/v3/_/logs/{sequence}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getLog({
    formanceBigintAsString: "true",
    sequence: 133076,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetLog } from "@formance/formance-sdk/funcs/ledgerV3GetLog.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetLog(sdk, {
    formanceBigintAsString: "true",
    sequence: 133076,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLogRequest](../../sdk/models/operations/getlogrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetLogSecurity](../../sdk/models/operations/getlogsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLogResponse](../../sdk/models/operations/getlogresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getMetadataSchemaStatus

Returns the declared type of every metadata field on a ledger. Requires `ledger:read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataSchemaStatus" method="get" path="/api/ledger/v3/{ledgerName}/metadata-schema" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getMetadataSchemaStatus({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetMetadataSchemaStatus } from "@formance/formance-sdk/funcs/ledgerV3GetMetadataSchemaStatus.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetMetadataSchemaStatus(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetMetadataSchemaStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataSchemaStatusRequest](../../sdk/models/operations/getmetadataschemastatusrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetMetadataSchemaStatusSecurity](../../sdk/models/operations/getmetadataschemastatussecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMetadataSchemaStatusResponse](../../sdk/models/operations/getmetadataschemastatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getNumscript

Retrieves a numscript by name from a ledger. Use the `version` query parameter to get a specific
semver version. If omitted or empty, the latest version is returned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getNumscript" method="get" path="/api/ledger/v3/{ledgerName}/numscripts/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getNumscript({
    ledgerName: "<value>",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetNumscript } from "@formance/formance-sdk/funcs/ledgerV3GetNumscript.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetNumscript(sdk, {
    ledgerName: "<value>",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetNumscript failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNumscriptRequest](../../sdk/models/operations/getnumscriptrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetNumscriptSecurity](../../sdk/models/operations/getnumscriptsecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetNumscriptResponse](../../sdk/models/operations/getnumscriptresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getNumscriptUsage

Returns the invocation counter and last-used timestamp for a Numscript template. Values are
materialised asynchronously by the `usagebuilder` subsystem from the FSM audit chain and may
lag the live FSM while the worker drains pending batches. A never-invoked template returns a
zero-valued response (not 404), so clients handle "never used" uniformly.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getNumscriptUsage" method="get" path="/api/ledger/v3/{ledgerName}/numscripts/{name}/usage" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getNumscriptUsage({
    ledgerName: "<value>",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetNumscriptUsage } from "@formance/formance-sdk/funcs/ledgerV3GetNumscriptUsage.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetNumscriptUsage(sdk, {
    ledgerName: "<value>",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetNumscriptUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNumscriptUsageRequest](../../sdk/models/operations/getnumscriptusagerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetNumscriptUsageSecurity](../../sdk/models/operations/getnumscriptusagesecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetNumscriptUsageResponse](../../sdk/models/operations/getnumscriptusageresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTransactionLedgerV3

Retrieves a transaction by its ID from the specified ledger. Requires `ledger:read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTransaction_ledgerV3" method="get" path="/api/ledger/v3/{ledgerName}/transactions/{transactionId}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.getTransactionLedgerV3({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    transactionId: 244792,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3GetTransactionLedgerV3 } from "@formance/formance-sdk/funcs/ledgerV3GetTransactionLedgerV3.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3GetTransactionLedgerV3(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    transactionId: 244792,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3GetTransactionLedgerV3 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionLedgerV3Request](../../sdk/models/operations/gettransactionledgerv3request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTransactionLedgerV3Security](../../sdk/models/operations/gettransactionledgerv3security.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionLedgerV3Response](../../sdk/models/operations/gettransactionledgerv3response.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## health

Returns the health status of the node. Returns 503 if the node is not connected to the cluster.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="health" method="get" path="/api/ledger/health" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.health();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3Health } from "@formance/formance-sdk/funcs/ledgerV3Health.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3Health(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3Health failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.HealthSecurity](../../sdk/models/operations/healthsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HealthResponse](../../sdk/models/operations/healthresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## info

Returns the server build metadata (version, commit, build date, Go runtime version). Unauthenticated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="info" method="get" path="/api/ledger/_info" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.info();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3Info } from "@formance/formance-sdk/funcs/ledgerV3Info.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3Info(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3Info failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.InfoSecurity](../../sdk/models/operations/infosecurity.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InfoResponse](../../sdk/models/operations/inforesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## inspectIndex

Scans a metadata index and returns distinct values, facets (value + count),
or a summary (cardinality, min/max, existence counts). The index must be
in READY state. Only metadata indexes are inspectable (builtin indexes
return 400). Requires `ledger:read` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="inspectIndex" method="get" path="/api/ledger/v3/{ledgerName}/indexes/{canonicalId}/inspect" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.inspectIndex({
    canonicalId: "<id>",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3InspectIndex } from "@formance/formance-sdk/funcs/ledgerV3InspectIndex.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3InspectIndex(sdk, {
    canonicalId: "<id>",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3InspectIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InspectIndexRequest](../../sdk/models/operations/inspectindexrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.InspectIndexSecurity](../../sdk/models/operations/inspectindexsecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InspectIndexResponse](../../sdk/models/operations/inspectindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountTypes

Returns all account types defined on a ledger, sorted by name.
Requires `ledger:ReadAccount` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountTypes" method="get" path="/api/ledger/v3/{ledgerName}/account-types" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listAccountTypes({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListAccountTypes } from "@formance/formance-sdk/funcs/ledgerV3ListAccountTypes.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListAccountTypes(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListAccountTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountTypesRequest](../../sdk/models/operations/listaccounttypesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAccountTypesSecurity](../../sdk/models/operations/listaccounttypessecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAccountTypesResponse](../../sdk/models/operations/listaccounttypesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountsLedgerV3

Lists accounts in a ledger in alphabetical order with cursor
pagination and an optional generic `filter` (e.g. address-prefix
selection via `filter=address ^= "users:"`). Requires `ledger:read`
scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccounts_ledgerV3" method="get" path="/api/ledger/v3/{ledgerName}/accounts" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listAccountsLedgerV3({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListAccountsLedgerV3 } from "@formance/formance-sdk/funcs/ledgerV3ListAccountsLedgerV3.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListAccountsLedgerV3(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListAccountsLedgerV3 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountsLedgerV3Request](../../sdk/models/operations/listaccountsledgerv3request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAccountsLedgerV3Security](../../sdk/models/operations/listaccountsledgerv3security.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAccountsLedgerV3Response](../../sdk/models/operations/listaccountsledgerv3response.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAllLedgers

Lists the ledgers in the cluster, paged by name (ascending unless
`reverse=true`). Requires `ledger:read` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllLedgers" method="get" path="/api/ledger/v3/" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listAllLedgers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListAllLedgers } from "@formance/formance-sdk/funcs/ledgerV3ListAllLedgers.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListAllLedgers(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListAllLedgers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllLedgersRequest](../../sdk/models/operations/listallledgersrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAllLedgersSecurity](../../sdk/models/operations/listallledgerssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllLedgersResponse](../../sdk/models/operations/listallledgersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAuditEntries

Lists audit trail entries (one per proposal, success or failure) across
the whole bucket, paged by audit sequence (ascending unless
`reverse=true`). Audit reads are
not ledger-scoped in the path — a single proposal can touch several
ledgers — so ledger scope, outcome and other dimensions are expressed
through the `filter` query parameter.

This endpoint always performs a live read and does not expose pinned
checkpoint reads. Filters containing indexed audit conditions wait for
the audit projection to certify the request's fixed main-store horizon;
matching entries are loaded from that same main snapshot. Unfiltered
reads and sequence-only bounds scan the audit zone directly without
waiting for the audit projection.

Requires `ledger:ReadAudit` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAuditEntries" method="get" path="/api/ledger/v3/_/audit-entries" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listAuditEntries({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListAuditEntries } from "@formance/formance-sdk/funcs/ledgerV3ListAuditEntries.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListAuditEntries(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListAuditEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditEntriesRequest](../../sdk/models/operations/listauditentriesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAuditEntriesSecurity](../../sdk/models/operations/listauditentriessecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAuditEntriesResponse](../../sdk/models/operations/listauditentriesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listBucketIndexes

Streams the bucket-scoped index registry. The `scope` query parameter
selects the flavor: `all` (default, matches the ListIndexesRequest
proto default) streams every entry across ledgers, skipping orphan
entries whose owning ledger no longer exists; `bucket` surfaces only
bucket-scoped entries (empty ledger, e.g. audit indexes). Use
`GET /v3/{ledgerName}/indexes` for the per-ledger view. Requires
`ledger:ReadOps` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listBucketIndexes" method="get" path="/api/ledger/v3/_/indexes" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listBucketIndexes({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListBucketIndexes } from "@formance/formance-sdk/funcs/ledgerV3ListBucketIndexes.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListBucketIndexes(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListBucketIndexes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBucketIndexesRequest](../../sdk/models/operations/listbucketindexesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListBucketIndexesSecurity](../../sdk/models/operations/listbucketindexessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListBucketIndexesResponse](../../sdk/models/operations/listbucketindexesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLedgerIndexes

Streams the indexes registered on a specific ledger. Requires
`ledger:ReadLedger` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLedgerIndexes" method="get" path="/api/ledger/v3/{ledgerName}/indexes" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listLedgerIndexes({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListLedgerIndexes } from "@formance/formance-sdk/funcs/ledgerV3ListLedgerIndexes.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListLedgerIndexes(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListLedgerIndexes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLedgerIndexesRequest](../../sdk/models/operations/listledgerindexesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListLedgerIndexesSecurity](../../sdk/models/operations/listledgerindexessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListLedgerIndexesResponse](../../sdk/models/operations/listledgerindexesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLedgerLogs

Lists log entries for a specific ledger, paged by ledger-local log ID
(ascending unless `reverse=true`).
Requires the builtin `LOG` index to be enabled on the ledger via `CreateIndex`.
Requires `ledger:read` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLedgerLogs" method="get" path="/api/ledger/v3/{ledgerName}/logs" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listLedgerLogs({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListLedgerLogs } from "@formance/formance-sdk/funcs/ledgerV3ListLedgerLogs.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListLedgerLogs(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListLedgerLogs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLedgerLogsRequest](../../sdk/models/operations/listledgerlogsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListLedgerLogsSecurity](../../sdk/models/operations/listledgerlogssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListLedgerLogsResponse](../../sdk/models/operations/listledgerlogsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLedgerTransactions

Lists transactions for a specific ledger. The default order is
newest-first (descending transaction id); pass `reverse=true` to
get oldest-first (ascending). Supports cursor pagination (`pageSize`,
`cursor`), an optional date range (`startDate`/`endDate`),
and the generic `filter` parameter (e.g. reference selection via
`filter={"$match":{"reference":"..."}}`, URL-encoded). Requires
`ledger:ReadTransaction` scope.

This is a live read, linearizable by default. `X-Consistency: stale`
reads the receiving node's local state, which may lag the leader. Every
projection used by the filter is automatically aligned. Unlike the
gRPC API, it does not accept the `checkpointId` option to pin the read
to a specific historical snapshot — use gRPC for checkpoint-pinned
reads. (Tracked follow-up, same carve-out as the audit reads.)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLedgerTransactions" method="get" path="/api/ledger/v3/{ledgerName}/transactions" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listLedgerTransactions({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListLedgerTransactions } from "@formance/formance-sdk/funcs/ledgerV3ListLedgerTransactions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListLedgerTransactions(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListLedgerTransactions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLedgerTransactionsRequest](../../sdk/models/operations/listledgertransactionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListLedgerTransactionsSecurity](../../sdk/models/operations/listledgertransactionssecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListLedgerTransactionsResponse](../../sdk/models/operations/listledgertransactionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listNumscriptVersions

Returns the numscript's history: its current latest (greatest stored
semver) and every stored version, highest-first.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listNumscriptVersions" method="get" path="/api/ledger/v3/{ledgerName}/numscripts/{name}/versions" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listNumscriptVersions({
    ledgerName: "<value>",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListNumscriptVersions } from "@formance/formance-sdk/funcs/ledgerV3ListNumscriptVersions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListNumscriptVersions(sdk, {
    ledgerName: "<value>",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListNumscriptVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListNumscriptVersionsRequest](../../sdk/models/operations/listnumscriptversionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListNumscriptVersionsSecurity](../../sdk/models/operations/listnumscriptversionssecurity.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListNumscriptVersionsResponse](../../sdk/models/operations/listnumscriptversionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listNumscripts

Lists every numscript of a ledger at its greatest stored version, paged
by name (ascending unless `reverse=true`).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listNumscripts" method="get" path="/api/ledger/v3/{ledgerName}/numscripts" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listNumscripts({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListNumscripts } from "@formance/formance-sdk/funcs/ledgerV3ListNumscripts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListNumscripts(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListNumscripts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListNumscriptsRequest](../../sdk/models/operations/listnumscriptsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListNumscriptsSecurity](../../sdk/models/operations/listnumscriptssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListNumscriptsResponse](../../sdk/models/operations/listnumscriptsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPreparedQueries

Returns a list of all prepared queries for a ledger. Requires `ledger:ReadQuery` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPreparedQueries" method="get" path="/api/ledger/v3/{ledgerName}/prepared-queries" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listPreparedQueries({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListPreparedQueries } from "@formance/formance-sdk/funcs/ledgerV3ListPreparedQueries.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListPreparedQueries(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListPreparedQueries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPreparedQueriesRequest](../../sdk/models/operations/listpreparedqueriesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListPreparedQueriesSecurity](../../sdk/models/operations/listpreparedqueriessecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPreparedQueriesResponse](../../sdk/models/operations/listpreparedqueriesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listSigningKeys

Lists the Ed25519 signing keys registered on the cluster, paged by key
id (ascending unless `reverse=true`). Requires `ledger:ReadOps` scope.

This route performs a live read, linearizable by default.
`X-Consistency: stale` reads the receiving node's local state, which
may lag the leader. Signing-key reads are live-only on both transports.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSigningKeys" method="get" path="/api/ledger/v3/_/signing-keys" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.listSigningKeys({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3ListSigningKeys } from "@formance/formance-sdk/funcs/ledgerV3ListSigningKeys.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3ListSigningKeys(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3ListSigningKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSigningKeysRequest](../../sdk/models/operations/listsigningkeysrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListSigningKeysSecurity](../../sdk/models/operations/listsigningkeyssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSigningKeysResponse](../../sdk/models/operations/listsigningkeysresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## livez

Returns 200 as long as the process is alive. Suitable for Kubernetes liveness probes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="livez" method="get" path="/api/ledger/livez" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.livez();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3Livez } from "@formance/formance-sdk/funcs/ledgerV3Livez.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3Livez(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3Livez failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.LivezSecurity](../../sdk/models/operations/livezsecurity.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LivezResponse](../../sdk/models/operations/livezresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## promoteLedger

Promotes a mirror-mode ledger to normal mode. After promotion, the mirror sync
worker is stopped and the ledger accepts direct write operations. Requires `ledger:write` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="promoteLedger" method="post" path="/api/ledger/v3/{ledgerName}/promote" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.promoteLedger({
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3PromoteLedger } from "@formance/formance-sdk/funcs/ledgerV3PromoteLedger.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3PromoteLedger(sdk, {
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3PromoteLedger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PromoteLedgerRequest](../../sdk/models/operations/promoteledgerrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PromoteLedgerSecurity](../../sdk/models/operations/promoteledgersecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PromoteLedgerResponse](../../sdk/models/operations/promoteledgerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## readyz

Returns 200 once the local Raft loop has started, regardless of whether
a leader has been elected. Suitable for Kubernetes readiness probes and
StatefulSet `OrderedReady` ordering: it is intentionally permissive so
peer pods can be brought up during a cold start where quorum cannot
form until they exist. Use `/clusterz` for the stricter
cluster-availability signal.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="readyz" method="get" path="/api/ledger/readyz" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.readyz();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3Readyz } from "@formance/formance-sdk/funcs/ledgerV3Readyz.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3Readyz(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3Readyz failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.ReadyzSecurity](../../sdk/models/operations/readyzsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReadyzResponse](../../sdk/models/operations/readyzresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountType

Removes an account type from a ledger's chart of accounts. Requires `ledger:WriteMetadata` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountType" method="delete" path="/api/ledger/v3/{ledgerName}/account-types/{typeName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.removeAccountType({
    ledgerName: "<value>",
    typeName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3RemoveAccountType } from "@formance/formance-sdk/funcs/ledgerV3RemoveAccountType.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3RemoveAccountType(sdk, {
    ledgerName: "<value>",
    typeName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3RemoveAccountType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountTypeRequest](../../sdk/models/operations/removeaccounttyperequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RemoveAccountTypeSecurity](../../sdk/models/operations/removeaccounttypesecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountTypeResponse](../../sdk/models/operations/removeaccounttyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeEventsSink

Removes a named event sink from the cluster. Requires `ledger:WriteOps`
scope. A non-empty controllerId must match the sink's controllerId;
a mismatch returns `SINK_CONTROLLER_MISMATCH` (409). An omitted or empty
controllerId removes the sink without an ownership precondition.
A missing sink returns `SINK_NOT_FOUND` (404). Malformed query encoding
or repeated controllerId parameters return `INVALID_REQUEST` (400)
before Apply, instead of becoming unconditional removal.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeEventsSink" method="delete" path="/api/ledger/v3/_/events-sinks/{sinkName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.removeEventsSink({
    sinkName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3RemoveEventsSink } from "@formance/formance-sdk/funcs/ledgerV3RemoveEventsSink.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3RemoveEventsSink(sdk, {
    sinkName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3RemoveEventsSink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveEventsSinkRequest](../../sdk/models/operations/removeeventssinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RemoveEventsSinkSecurity](../../sdk/models/operations/removeeventssinksecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveEventsSinkResponse](../../sdk/models/operations/removeeventssinkresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeMetadataFieldType

Removes the type declaration for a metadata key on a ledger.
Existing metadata values remain unchanged and any attached index is dropped. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeMetadataFieldType" method="delete" path="/api/ledger/v3/{ledgerName}/metadata-schema/{targetType}/{key}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.removeMetadataFieldType({
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    targetType: "transaction",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3RemoveMetadataFieldType } from "@formance/formance-sdk/funcs/ledgerV3RemoveMetadataFieldType.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3RemoveMetadataFieldType(sdk, {
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    targetType: "transaction",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3RemoveMetadataFieldType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveMetadataFieldTypeRequest](../../sdk/models/operations/removemetadatafieldtyperequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RemoveMetadataFieldTypeSecurity](../../sdk/models/operations/removemetadatafieldtypesecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveMetadataFieldTypeResponse](../../sdk/models/operations/removemetadatafieldtyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## revertTransactionLedgerV3

Reverts a transaction by creating a reverse transaction that undoes its effects. Requires `ledger:write` scope.
The body is optional; an absent or empty body uses default options. Supplied
options and metadata are decoded for both known-length and HTTP/1.1 chunked
requests. Malformed or truncated JSON, extra values, trailing non-whitespace
and options of the wrong JSON type (for example `"atEffectiveDate": "true"`
or a non-object `metadata`) return 400 before applying the revert. A JSON
`null` option uses its default. The complete body, including trailing
whitespace, counts towards the 4 MiB limit; exceeding it returns 413.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="revertTransaction_ledgerV3" method="post" path="/api/ledger/v3/{ledgerName}/transactions/{transactionId}/revert" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.revertTransactionLedgerV3({
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    transactionId: 142333,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3RevertTransactionLedgerV3 } from "@formance/formance-sdk/funcs/ledgerV3RevertTransactionLedgerV3.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3RevertTransactionLedgerV3(sdk, {
    formanceBigintAsString: "true",
    ledgerName: "<value>",
    transactionId: 142333,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3RevertTransactionLedgerV3 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevertTransactionLedgerV3Request](../../sdk/models/operations/reverttransactionledgerv3request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RevertTransactionLedgerV3Security](../../sdk/models/operations/reverttransactionledgerv3security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RevertTransactionLedgerV3Response](../../sdk/models/operations/reverttransactionledgerv3response.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## saveAccountMetadata

Saves metadata for a specific account in the ledger. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="saveAccountMetadata" method="post" path="/api/ledger/v3/{ledgerName}/accounts/{address}/metadata" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.saveAccountMetadata({
    requestBody: {
      "account_type": "asset",
      "label": "Bank Account",
      "active": true,
      "balance_threshold": 1000,
    },
    address: "users:001",
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SaveAccountMetadata } from "@formance/formance-sdk/funcs/ledgerV3SaveAccountMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SaveAccountMetadata(sdk, {
    requestBody: {
      "account_type": "asset",
      "label": "Bank Account",
      "active": true,
      "balance_threshold": 1000,
    },
    address: "users:001",
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SaveAccountMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SaveAccountMetadataRequest](../../sdk/models/operations/saveaccountmetadatarequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SaveAccountMetadataSecurity](../../sdk/models/operations/saveaccountmetadatasecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SaveAccountMetadataResponse](../../sdk/models/operations/saveaccountmetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## saveLedgerMetadata

Saves metadata key-value pairs on the ledger itself. Requires `ledger:WriteMetadata`; `ledger:write` grants it under the default scope mapping. Custom scope mappings can differ.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="saveLedgerMetadata" method="post" path="/api/ledger/v3/{ledgerName}/metadata" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.saveLedgerMetadata({
    requestBody: {
      "environment": "production",
      "team": "payments",
      "region": "eu-west-1",
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SaveLedgerMetadata } from "@formance/formance-sdk/funcs/ledgerV3SaveLedgerMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SaveLedgerMetadata(sdk, {
    requestBody: {
      "environment": "production",
      "team": "payments",
      "region": "eu-west-1",
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SaveLedgerMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SaveLedgerMetadataRequest](../../sdk/models/operations/saveledgermetadatarequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SaveLedgerMetadataSecurity](../../sdk/models/operations/saveledgermetadatasecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SaveLedgerMetadataResponse](../../sdk/models/operations/saveledgermetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## saveNumscript

Appends an immutable version to a ledger's numscript library. The `version`
field must be an explicit full semver (e.g. "1.0.0"); it creates a new
version and fails if that version already exists. The per-name latest is
always the greatest stored semver.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="saveNumscript" method="put" path="/api/ledger/v3/{ledgerName}/numscripts/{name}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.saveNumscript({
    saveNumscriptRequest: {
      content: "<value>",
      version: "1.0.0",
    },
    ledgerName: "<value>",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SaveNumscript } from "@formance/formance-sdk/funcs/ledgerV3SaveNumscript.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SaveNumscript(sdk, {
    saveNumscriptRequest: {
      content: "<value>",
      version: "1.0.0",
    },
    ledgerName: "<value>",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SaveNumscript failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SaveNumscriptRequest](../../sdk/models/operations/savenumscriptrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SaveNumscriptSecurity](../../sdk/models/operations/savenumscriptsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SaveNumscriptResponse](../../sdk/models/operations/savenumscriptresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## saveTransactionMetadata

Saves metadata for a specific transaction in the ledger. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="saveTransactionMetadata" method="post" path="/api/ledger/v3/{ledgerName}/transactions/{transactionId}/metadata" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.saveTransactionMetadata({
    requestBody: {
      "reason": "correction",
      "source": "support",
      "priority": 1,
    },
    ledgerName: "<value>",
    transactionId: 385411,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SaveTransactionMetadata } from "@formance/formance-sdk/funcs/ledgerV3SaveTransactionMetadata.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SaveTransactionMetadata(sdk, {
    requestBody: {
      "reason": "correction",
      "source": "support",
      "priority": 1,
    },
    ledgerName: "<value>",
    transactionId: 385411,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SaveTransactionMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SaveTransactionMetadataRequest](../../sdk/models/operations/savetransactionmetadatarequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SaveTransactionMetadataSecurity](../../sdk/models/operations/savetransactionmetadatasecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SaveTransactionMetadataResponse](../../sdk/models/operations/savetransactionmetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setDefaultEnforcementMode

Sets the default enforcement mode for accounts that do not match any defined
account type. Must be STRICT or AUDIT. STRICT rejects an order that uses an
unmatched account with `400 ACCOUNT_NOT_MATCHING_TYPE`. AUDIT accepts the
order and does not report the unmatched account: the response carries no
warning. Requires `ledger:WriteMetadata` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="setDefaultEnforcementMode" method="put" path="/api/ledger/v3/{ledgerName}/account-types/default-enforcement-mode" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.setDefaultEnforcementMode({
    setDefaultEnforcementModeRequest: {
      enforcementMode: "AUDIT",
    },
    ledgerName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SetDefaultEnforcementMode } from "@formance/formance-sdk/funcs/ledgerV3SetDefaultEnforcementMode.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SetDefaultEnforcementMode(sdk, {
    setDefaultEnforcementModeRequest: {
      enforcementMode: "AUDIT",
    },
    ledgerName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SetDefaultEnforcementMode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetDefaultEnforcementModeRequest](../../sdk/models/operations/setdefaultenforcementmoderequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SetDefaultEnforcementModeSecurity](../../sdk/models/operations/setdefaultenforcementmodesecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetDefaultEnforcementModeResponse](../../sdk/models/operations/setdefaultenforcementmoderesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setMetadataFieldType

Declares or changes the type used to encode a metadata key in an attached query index.
Metadata values are neither validated nor converted by this declaration, and existing primary values remain unchanged.
Any attached index is rewritten asynchronously. Requires `ledger:WriteMetadata` scope (included in the default `ledger:write` mapping).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="setMetadataFieldType" method="put" path="/api/ledger/v3/{ledgerName}/metadata-schema/{targetType}/{key}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.setMetadataFieldType({
    setMetadataTypeRequest: {
      type: "int16",
    },
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    targetType: "account",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3SetMetadataFieldType } from "@formance/formance-sdk/funcs/ledgerV3SetMetadataFieldType.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3SetMetadataFieldType(sdk, {
    setMetadataTypeRequest: {
      type: "int16",
    },
    key: "formance.com/reviewed",
    ledgerName: "<value>",
    targetType: "account",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3SetMetadataFieldType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetMetadataFieldTypeRequest](../../sdk/models/operations/setmetadatafieldtyperequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SetMetadataFieldTypeSecurity](../../sdk/models/operations/setmetadatafieldtypesecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetMetadataFieldTypeResponse](../../sdk/models/operations/setmetadatafieldtyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePreparedQuery

Updates the filter of an existing prepared query. Requires `ledger:WriteQuery` scope.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePreparedQuery" method="put" path="/api/ledger/v3/{ledgerName}/prepared-queries/{queryName}" -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.ledger.v3.updatePreparedQuery({
    updatePreparedQueryRequest: {},
    ledgerName: "<value>",
    queryName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { ledgerV3UpdatePreparedQuery } from "@formance/formance-sdk/funcs/ledgerV3UpdatePreparedQuery.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await ledgerV3UpdatePreparedQuery(sdk, {
    updatePreparedQueryRequest: {},
    ledgerName: "<value>",
    queryName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ledgerV3UpdatePreparedQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePreparedQueryRequest](../../sdk/models/operations/updatepreparedqueryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdatePreparedQuerySecurity](../../sdk/models/operations/updatepreparedquerysecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePreparedQueryResponse](../../sdk/models/operations/updatepreparedqueryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |