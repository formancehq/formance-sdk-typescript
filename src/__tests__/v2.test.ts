/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { SDK } from "../index.js";
import { V2ErrorsEnum, V2LogType } from "../sdk/models/shared/index.js";
import { createTestHTTPClient } from "./testclient.js";

test("V2 V2 Add Metadata On Transaction", async () => {
  const testHttpClient = createTestHTTPClient("v2AddMetadataOnTransaction");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.addMetadataOnTransaction({
    requestBody: {
      "admin": "true",
    },
    dryRun: true,
    id: BigInt("1234"),
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Add Metadata To Account", async () => {
  const testHttpClient = createTestHTTPClient("v2AddMetadataToAccount");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.addMetadataToAccount({
    requestBody: {
      "admin": "true",
    },
    address: "users:001",
    dryRun: true,
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Count Accounts", async () => {
  const testHttpClient = createTestHTTPClient("v2CountAccounts");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.countAccounts({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Count Transactions", async () => {
  const testHttpClient = createTestHTTPClient("v2CountTransactions");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.countTransactions({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Create Bulk", async () => {
  const testHttpClient = createTestHTTPClient("v2CreateBulk");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.createBulk({
    requestBody: [
      {
        action: "<value>",
      },
    ],
    atomic: true,
    continueOnFailure: true,
    ledger: "ledger001",
    parallel: true,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2BulkResponse).toBeDefined();
  expect(result.v2BulkResponse).toEqual({
    data: [
      {
        errorCode: "<value>",
        errorDescription: "<value>",
        logID: 544883,
        responseType: "<value>",
      },
    ],
    details:
      "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
    errorCode: V2ErrorsEnum.Validation,
    errorMessage: "[VALIDATION] invalid 'cursor' query param",
  });
});

test("V2 V2 Create Ledger", async () => {
  const testHttpClient = createTestHTTPClient("v2CreateLedger");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.createLedger({
    v2CreateLedgerRequest: {
      metadata: {
        "admin": "true",
      },
    },
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Create Transaction", async () => {
  const testHttpClient = createTestHTTPClient("v2CreateTransaction");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.createTransaction({
    v2PostTransaction: {
      metadata: {
        "admin": "true",
      },
      postings: [
        {
          amount: BigInt("100"),
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: BigInt("100"),
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      script: {
        plain: "vars {\n"
          + "account $user\n"
          + "}\n"
          + "send [COIN 10] (\n"
          + "	source = @world\n"
          + "	destination = $user\n"
          + ")\n"
          + "",
        vars: {
          "user": "users:042",
        },
      },
    },
    dryRun: true,
    force: true,
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2CreateTransactionResponse).toBeDefined();
  expect(result.v2CreateTransactionResponse).toEqual({
    data: {
      id: BigInt("31495"),
      metadata: {
        "admin": "true",
      },
      postCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postings: [],
      preCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      preCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      reference: "ref:001",
      reverted: false,
      timestamp: new Date("2025-09-22T01:21:07.537Z"),
    },
  });
});

test("V2 V2 Delete Account Metadata", async () => {
  const testHttpClient = createTestHTTPClient("v2DeleteAccountMetadata");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.deleteAccountMetadata({
    address: "96609 Cummings Canyon",
    key: "foo",
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
});

test("V2 V2 Delete Ledger Metadata", async () => {
  const testHttpClient = createTestHTTPClient("v2DeleteLedgerMetadata");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.deleteLedgerMetadata({
    key: "foo",
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 Delete Transaction Metadata", async () => {
  const testHttpClient = createTestHTTPClient("v2DeleteTransactionMetadata");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.deleteTransactionMetadata({
    id: BigInt("1234"),
    key: "foo",
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
});

test("V2 V2 Export Logs", async () => {
  const testHttpClient = createTestHTTPClient("v2ExportLogs");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.exportLogs({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
});

test("V2 V2 Get Account", async () => {
  const testHttpClient = createTestHTTPClient("v2GetAccount");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getAccount({
    address: "users:001",
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2AccountResponse).toBeDefined();
  expect(result.v2AccountResponse).toEqual({
    data: {
      address: "users:001",
      effectiveVolumes: {
        "USD": {
          balance: BigInt("80"),
          input: BigInt("100"),
          output: BigInt("20"),
        },
        "EUR": {
          balance: BigInt("80"),
          input: BigInt("100"),
          output: BigInt("20"),
        },
      },
      metadata: {
        "admin": "true",
      },
      volumes: {
        "USD": {
          balance: BigInt("80"),
          input: BigInt("100"),
          output: BigInt("20"),
        },
        "EUR": {
          balance: BigInt("80"),
          input: BigInt("100"),
          output: BigInt("20"),
        },
      },
    },
  });
});

test("V2 V2 Get Balances Aggregated", async () => {
  const testHttpClient = createTestHTTPClient("v2GetBalancesAggregated");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getBalancesAggregated({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2AggregateBalancesResponse).toBeDefined();
  expect(result.v2AggregateBalancesResponse).toEqual({
    data: {
      "USD": BigInt("100"),
      "EUR": BigInt("12"),
    },
  });
});

test("V2 V2 Get Info", async () => {
  const testHttpClient = createTestHTTPClient("v2GetInfo");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getInfo();
  expect(result.statusCode).toBe(200);
  expect(result.v2ConfigInfoResponse).toBeDefined();
  expect(result.v2ConfigInfoResponse).toEqual({
    server: "<value>",
    version: "<value>",
  });
});

test("V2 V2 Get Ledger", async () => {
  const testHttpClient = createTestHTTPClient("v2GetLedger");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getLedger({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2GetLedgerResponse).toBeDefined();
  expect(result.v2GetLedgerResponse).toEqual({
    data: {
      addedAt: new Date("2024-04-15T03:59:26.558Z"),
      bucket: "<value>",
      metadata: {
        "admin": "true",
      },
      name: "<value>",
    },
  });
});

test("V2 V2 Get Ledger Info", async () => {
  const testHttpClient = createTestHTTPClient("v2GetLedgerInfo");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getLedgerInfo({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2LedgerInfoResponse).toBeDefined();
  expect(result.v2LedgerInfoResponse).toEqual({
    data: {
      name: "ledger001",
      storage: {
        migrations: [
          {
            name: "migrations:001",
            version: "11",
          },
          {
            name: "migrations:001",
            version: "11",
          },
          {
            name: "migrations:001",
            version: "11",
          },
        ],
      },
    },
  });
});

test("V2 Get Metrics", async () => {
  const testHttpClient = createTestHTTPClient("getMetrics");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getMetrics();
  expect(result.statusCode).toBe(200);
  expect(result.object).toBeDefined();
  expect(result.object).toEqual({
    "key": "<value>",
    "key1": "<value>",
  });
});

test("V2 V2 Get Transaction", async () => {
  const testHttpClient = createTestHTTPClient("v2GetTransaction");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getTransaction({
    id: BigInt("1234"),
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2GetTransactionResponse).toBeDefined();
  expect(result.v2GetTransactionResponse).toEqual({
    data: {
      id: BigInt("546228"),
      metadata: {
        "admin": "true",
      },
      postCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postings: [],
      preCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      preCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2024-01-04T04:51:12.769Z"),
    },
  });
});

test("V2 V2 Get Volumes With Balances", async () => {
  const testHttpClient = createTestHTTPClient("v2GetVolumesWithBalances");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.getVolumesWithBalances({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    groupBy: 3,
    ledger: "ledger001",
    pageSize: 100,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2VolumesWithBalanceCursorResponse).toBeDefined();
  expect(result.v2VolumesWithBalanceCursorResponse).toEqual({
    cursor: {
      data: [
        {
          account: "60079609",
          asset: "<value>",
          balance: BigInt("992275"),
          input: BigInt("894289"),
          output: BigInt("625394"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("V2 V2 Import Logs", async () => {
  const testHttpClient = createTestHTTPClient("v2ImportLogs");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.importLogs({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(204);
});

test("V2 V2 List Accounts", async () => {
  const testHttpClient = createTestHTTPClient("v2ListAccounts");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.listAccounts({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
    pageSize: 100,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2AccountsCursorResponse).toBeDefined();
  expect(result.v2AccountsCursorResponse).toEqual({
    cursor: {
      data: [],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("V2 V2 List Ledgers", async () => {
  const testHttpClient = createTestHTTPClient("v2ListLedgers");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.listLedgers({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2LedgerListResponse).toBeDefined();
  expect(result.v2LedgerListResponse).toEqual({
    cursor: {
      data: [
        {
          addedAt: new Date("2025-08-18T14:16:25.795Z"),
          bucket: "<value>",
          metadata: {
            "admin": "true",
          },
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("V2 V2 List Logs", async () => {
  const testHttpClient = createTestHTTPClient("v2ListLogs");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.listLogs({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
    pageSize: 100,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2LogsCursorResponse).toBeDefined();
  expect(result.v2LogsCursorResponse).toEqual({
    cursor: {
      data: [
        {
          data: {},
          date: new Date("2024-06-27T07:17:46.078Z"),
          hash:
            "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
          id: BigInt("1234"),
          type: V2LogType.RevertedTransaction,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("V2 V2 List Transactions", async () => {
  const testHttpClient = createTestHTTPClient("v2ListTransactions");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.listTransactions({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
    pageSize: 100,
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2TransactionsCursorResponse).toBeDefined();
  expect(result.v2TransactionsCursorResponse).toEqual({
    cursor: {
      data: [],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("V2 V2 Read Stats", async () => {
  const testHttpClient = createTestHTTPClient("v2ReadStats");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.readStats({
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(200);
  expect(result.v2StatsResponse).toBeDefined();
  expect(result.v2StatsResponse).toEqual({
    data: {
      accounts: 144691,
      transactions: BigInt("882277"),
    },
  });
});

test("V2 V2 Revert Transaction", async () => {
  const testHttpClient = createTestHTTPClient("v2RevertTransaction");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.revertTransaction({
    dryRun: true,
    id: BigInt("1234"),
    ledger: "ledger001",
  });
  expect(result.statusCode).toBe(201);
  expect(result.v2RevertTransactionResponse).toBeDefined();
  expect(result.v2RevertTransactionResponse).toEqual({
    data: {
      id: BigInt("614792"),
      metadata: {
        "admin": "true",
      },
      postCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      postings: [],
      preCommitEffectiveVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      preCommitVolumes: {
        "orders:1": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
        "orders:2": {
          "USD": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
          "EUR": {
            balance: BigInt("80"),
            input: BigInt("100"),
            output: BigInt("20"),
          },
        },
      },
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2024-12-23T06:12:13.815Z"),
    },
  });
});

test("V2 V2 Update Ledger Metadata", async () => {
  const testHttpClient = createTestHTTPClient("v2UpdateLedgerMetadata");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.ledger.v2.updateLedgerMetadata({
    requestBody: {
      "admin": "true",
    },
    ledger: "ledger001",
  });
  expect([500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511]).toContain(
    result.statusCode,
  );
  expect(result.v2ErrorResponse).toBeDefined();
  expect(result.v2ErrorResponse).toEqual({
    details:
      "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
    errorCode: V2ErrorsEnum.Validation,
    errorMessage: "[VALIDATION] invalid 'cursor' query param",
  });
});
