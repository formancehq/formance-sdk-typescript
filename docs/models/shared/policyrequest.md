# PolicyRequest


## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ledgerName`                                          | *string*                                              | :heavy_check_mark:                                    | N/A                                                   | default                                               |
| `ledgerQuery`                                         | *string*                                              | :heavy_check_mark:                                    | N/A                                                   | {"$match": {"metadata[reconciliation]": "pool:main"}} |
| `name`                                                | *string*                                              | :heavy_check_mark:                                    | N/A                                                   | XXX                                                   |
| `paymentsPoolID`                                      | *string*                                              | :heavy_check_mark:                                    | N/A                                                   | XXX                                                   |