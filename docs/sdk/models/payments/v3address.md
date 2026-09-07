# V3Address

A postal address

## Example Usage

```typescript
import { V3Address } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Address = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `city`                                                | *string*                                              | :heavy_minus_sign:                                    | City of the address                                   |
| `country`                                             | *string*                                              | :heavy_minus_sign:                                    | Country of the address, as an ISO 3166-1 alpha-2 code |
| `postalCode`                                          | *string*                                              | :heavy_minus_sign:                                    | Postal or ZIP code of the address                     |
| `region`                                              | *string*                                              | :heavy_minus_sign:                                    | Region, state or province of the address              |
| `streetName`                                          | *string*                                              | :heavy_minus_sign:                                    | Street name of the address                            |
| `streetNumber`                                        | *string*                                              | :heavy_minus_sign:                                    | Street number of the address                          |