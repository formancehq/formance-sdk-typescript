# RevertTransactionRequest


## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `ledger`                         | *string*                         | :heavy_check_mark:               | Name of the ledger.              | ledger001                        |
| `txid`                           | *BigInt*                         | :heavy_check_mark:               | Transaction ID.                  | 1234                             |
| `disableChecks`                  | *boolean*                        | :heavy_minus_sign:               | Allow to disable balances checks |                                  |