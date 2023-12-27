# V2Account


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `address`                                                   | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         | users:001                                                   |
| `effectiveVolumes`                                          | Record<string, [V2Volume](../../models/shared/v2volume.md)> | :heavy_minus_sign:                                          | N/A                                                         | [object Object]                                             |
| `metadata`                                                  | Record<string, *string*>                                    | :heavy_check_mark:                                          | N/A                                                         | [object Object]                                             |
| `volumes`                                                   | Record<string, [V2Volume](../../models/shared/v2volume.md)> | :heavy_minus_sign:                                          | N/A                                                         | [object Object]                                             |