# AccountWithVolumesAndBalances


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `address`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | users:001                                               |
| `balances`                                              | Record<string, *number*>                                | :heavy_minus_sign:                                      | N/A                                                     | [object Object]                                         |
| `metadata`                                              | Record<string, *any*>                                   | :heavy_minus_sign:                                      | N/A                                                     | [object Object]                                         |
| `type`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | virtual                                                 |
| `volumes`                                               | Record<string, [Volume](../../models/shared/volume.md)> | :heavy_minus_sign:                                      | N/A                                                     | [object Object]                                         |