/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { SDK } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Sdk Wallets V1 Confirm Hold", async () => {
  const testHttpClient = createTestHTTPClient("confirmHold");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.confirmHold({
    confirmHoldRequest: {
      amount: BigInt("100"),
      final: true,
    },
    holdId: "<id>",
  });
  expect(result.statusCode).toBe(204);
});

test("Sdk Wallets V1 Create Balance", async () => {
  const testHttpClient = createTestHTTPClient("createBalance");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.createBalance({
    id: "<id>",
  });
  expect(result.statusCode).toBe(201);
  expect(result.createBalanceResponse).toBeDefined();
  expect(result.createBalanceResponse).toEqual({
    data: {
      name: "<value>",
    },
  });
});

test("Sdk Wallets V1 Create Wallet", async () => {
  const testHttpClient = createTestHTTPClient("createWallet");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.createWallet({});
  expect(result.statusCode).toBe(201);
  expect(result.createWalletResponse).toBeDefined();
  expect(result.createWalletResponse).toEqual({
    data: {
      createdAt: new Date("2024-08-07T07:13:48.961Z"),
      id: "28d5e2b6-b532-4ea9-ac35-db845f4bcf19",
      ledger: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
    },
  });
});

test("Sdk Wallets V1 Credit Wallet", async () => {
  const testHttpClient = createTestHTTPClient("creditWallet");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.creditWallet({
    creditWalletRequest: {
      amount: {
        amount: BigInt("100"),
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      sources: [],
    },
    id: "<id>",
  });
  expect(result.statusCode).toBe(204);
});

test("Sdk Wallets V1 Debit Wallet", async () => {
  const testHttpClient = createTestHTTPClient("debitWallet");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.debitWallet({
    debitWalletRequest: {
      amount: {
        amount: BigInt("100"),
        asset: "USD/2",
      },
      metadata: {
        "key": "",
      },
      pending: true,
    },
    id: "<id>",
  });
  expect(result.statusCode).toBe(201);
  expect(result.debitWalletResponse).toBeDefined();
  expect(result.debitWalletResponse).toEqual({
    data: {
      description: "supposing any instead underachieve",
      id: "cb202f54-4467-4509-9820-d52190eb2ad6",
      metadata: {},
      walletID: "<id>",
    },
  });
});

test("Sdk Wallets V1 Get Balance", async () => {
  const testHttpClient = createTestHTTPClient("getBalance");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getBalance({
    balanceName: "<value>",
    id: "<id>",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getBalanceResponse).toBeDefined();
  expect(result.getBalanceResponse).toEqual({
    data: {
      assets: {
        "key": BigInt("623534"),
        "key1": BigInt("686479"),
        "key2": BigInt("925894"),
      },
      name: "<value>",
    },
  });
});

test("Sdk Wallets V1 Get Hold", async () => {
  const testHttpClient = createTestHTTPClient("getHold");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getHold({
    holdID: "<id>",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getHoldResponse).toBeDefined();
  expect(result.getHoldResponse).toEqual({
    data: {
      description: "fooey lest vivaciously",
      id: "cd413999-17b3-47c4-95d9-940e9d32963a",
      metadata: {
        "key": "<value>",
        "key1": "<value>",
      },
      originalAmount: BigInt("100"),
      remaining: BigInt("10"),
      walletID: "<id>",
    },
  });
});

test("Sdk Wallets V1 Get Holds", async () => {
  const testHttpClient = createTestHTTPClient("getHolds");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getHolds({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    metadata: {
      "admin": "true",
    },
    walletID: "wallet1",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getHoldsResponse).toBeDefined();
  expect(result.getHoldsResponse).toEqual({
    cursor: {
      data: [
        {
          description:
            "anti all mmm thorough badly what once self-assured bitterly",
          id: "71f718aa-973f-455f-8164-685872daf907",
          metadata: {},
          walletID: "<id>",
        },
        {
          description: "veg before reservation an",
          id: "53a74377-2ea1-48a5-98b0-670a65f47f18",
          metadata: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          walletID: "<id>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("Sdk Wallets V1 Get Transactions", async () => {
  const testHttpClient = createTestHTTPClient("getTransactions");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getTransactions({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    walletID: "wallet1",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getTransactionsResponse).toBeDefined();
  expect(result.getTransactionsResponse).toEqual({
    cursor: {
      data: [
        {
          id: 417503,
          metadata: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          postCommitVolumes: {
            "key": {
              "USD": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
              "EUR": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
            },
          },
          postings: [],
          preCommitVolumes: {
            "key": {
              "USD": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
              "EUR": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
            },
            "key1": {
              "USD": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
              "EUR": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
            },
          },
          reference: "ref:001",
          timestamp: new Date("2025-04-16T13:08:57.024Z"),
        },
        {
          id: 751740,
          metadata: {
            "key": "<value>",
            "key1": "<value>",
          },
          postCommitVolumes: {
            "key": {
              "USD": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
              "EUR": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
            },
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
            {
              amount: BigInt("100"),
              asset: "COIN",
              destination: "users:002",
              source: "users:001",
            },
          ],
          preCommitVolumes: {
            "key": {
              "USD": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
              "EUR": {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
              },
            },
          },
          reference: "ref:001",
          timestamp: new Date("2023-04-29T22:11:40.809Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  });
});

test("Sdk Wallets V1 Get Wallet", async () => {
  const testHttpClient = createTestHTTPClient("getWallet");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getWallet({
    id: "<id>",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getWalletResponse).toBeDefined();
  expect(result.getWalletResponse).toEqual({
    data: {
      balances: {
        main: {
          assets: {
            "key": BigInt("571864"),
          },
        },
      },
      createdAt: new Date("2024-11-13T05:25:13.185Z"),
      id: "bec36009-93cb-484f-9620-8873422591bc",
      ledger: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
    },
  });
});

test("Sdk Wallets V1 Get Wallet Summary", async () => {
  const testHttpClient = createTestHTTPClient("getWalletSummary");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.getWalletSummary({
    id: "<id>",
  });
  expect(result.statusCode).toBe(200);
  expect(result.getWalletSummaryResponse).toBeDefined();
  expect(result.getWalletSummaryResponse).toEqual({
    data: {
      availableFunds: {
        "key": BigInt("265270"),
        "key1": BigInt("425645"),
      },
      balances: [
        {
          assets: {},
          name: "<value>",
        },
      ],
      expirableFunds: {},
      expiredFunds: {
        "key": BigInt("937378"),
        "key1": BigInt("696335"),
        "key2": BigInt("846984"),
      },
      holdFunds: {
        "key": BigInt("930990"),
        "key1": BigInt("132783"),
        "key2": BigInt("515347"),
      },
    },
  });
});

test("Sdk Wallets V1 List Balances", async () => {
  const testHttpClient = createTestHTTPClient("listBalances");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.listBalances({
    id: "<id>",
  });
  expect(result.statusCode).toBe(200);
  expect(result.listBalancesResponse).toBeDefined();
  expect(result.listBalancesResponse).toEqual({
    cursor: {
      data: [
        {
          name: "<value>",
        },
        {
          name: "<value>",
        },
        {
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

test("Sdk Wallets V1 List Wallets", async () => {
  const testHttpClient = createTestHTTPClient("listWallets");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.listWallets({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    expand: "balances",
    metadata: {
      "admin": "true",
    },
    name: "wallet1",
  });
  expect(result.statusCode).toBe(200);
  expect(result.listWalletsResponse).toBeDefined();
  expect(result.listWalletsResponse).toEqual({
    cursor: {
      data: [
        {
          createdAt: new Date("2023-02-28T12:24:12.671Z"),
          id: "acf390dc-7f51-40b9-8bec-968d375f0c57",
          ledger: "<value>",
          metadata: {
            "key": "<value>",
            "key1": "<value>",
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

test("Sdk Wallets V1 Update Wallet", async () => {
  const testHttpClient = createTestHTTPClient("updateWallet");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.updateWallet({
    id: "<id>",
  });
  expect(result.statusCode).toBe(204);
});

test("Sdk Wallets V1 Void Hold", async () => {
  const testHttpClient = createTestHTTPClient("voidHold");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.voidHold({
    holdId: "<id>",
  });
  expect(result.statusCode).toBe(204);
});

test("Sdk Wallets V1 Walletsget Server Info", async () => {
  const testHttpClient = createTestHTTPClient("walletsgetServerInfo");

  const sdk = new SDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    security: {
      clientID: "<YOUR_CLIENT_ID_HERE>",
      clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
  });

  const result = await sdk.wallets.v1.walletsgetServerInfo();
  expect(result.statusCode).toBe(200);
  expect(result.serverInfo).toBeDefined();
  expect(result.serverInfo).toEqual({
    version: "<value>",
  });
});
