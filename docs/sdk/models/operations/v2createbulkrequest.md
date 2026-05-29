# V2CreateBulkRequest

## Example Usage

```typescript
import { V2CreateBulkRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateBulkRequest = {
  requestBody: [
    {
      v2PostTransaction: {
        v2Metadata: {
          "admin": "true",
        },
        accountMetadata: {
          "key": {
            "admin": "true",
          },
        },
        postings: [
          {
            amount: 100n,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        script: {
          plain:
            "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
          template: "CUSTOMER_DEPOSIT",
          vars: {
            "user": "users:042",
          },
        },
      },
      action: "<value>",
    },
    {
      v2PostTransaction: {
        v2Metadata: {
          "admin": "true",
        },
        accountMetadata: {
          "key": {
            "admin": "true",
          },
        },
        postings: [
          {
            amount: 100n,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        script: {
          plain:
            "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
          template: "CUSTOMER_DEPOSIT",
          vars: {
            "user": "users:042",
          },
        },
      },
      action: "<value>",
    },
    {
      v2PostTransaction: {
        v2Metadata: {
          "admin": "true",
        },
        accountMetadata: {
          "key": {
            "admin": "true",
          },
        },
        postings: [
          {
            amount: 100n,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        script: {
          plain:
            "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
          template: "CUSTOMER_DEPOSIT",
          vars: {
            "user": "users:042",
          },
        },
      },
      action: "<value>",
    },
  ],
  atomic: true,
  continueOnFailure: true,
  ledger: "ledger001",
  parallel: true,
  schemaVersion: "v1.0.0",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestBody`                                                                | *any*[]                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `atomic`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | Make bulk atomic                                                             | true                                                                         |
| `continueOnFailure`                                                          | *boolean*                                                                    | :heavy_minus_sign:                                                           | Continue on failure                                                          | true                                                                         |
| `ledger`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Name of the ledger.                                                          | ledger001                                                                    |
| `parallel`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | Process bulk elements in parallel                                            | true                                                                         |
| `schemaVersion`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Default schema version to use for validation (can be overridden per element) | v1.0.0                                                                       |