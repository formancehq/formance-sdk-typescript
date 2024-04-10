# V2RevertTransactionRequest


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `atEffectiveDate`                                       | *boolean*                                               | :heavy_minus_sign:                                      | Revert transaction at effective date of the original tx |                                                         |
| `force`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Force revert                                            |                                                         |
| `id`                                                    | *BigInt*                                                | :heavy_check_mark:                                      | Transaction ID.                                         | 1234                                                    |
| `ledger`                                                | *string*                                                | :heavy_check_mark:                                      | Name of the ledger.                                     | ledger001                                               |