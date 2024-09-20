# V2BulkElementResult

## Example Usage

```typescript
import { V2BulkElementResult } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementResult = {
  data: {
    id: BigInt("633931"),
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
    ],
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2023-12-31T18:45:29.299Z"),
  },
  responseType: "<value>",
};
```

## Supported Types

### `shared.Schemas`

```typescript
const value: shared.Schemas = /* values here */
```

### `shared.V2BulkElementResultCreateTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultCreateTransactionSchemas = /* values here */
```

### `shared.V2BulkElementResultDeleteMetadataSchemas`

```typescript
const value: shared.V2BulkElementResultDeleteMetadataSchemas = /* values here */
```

### `shared.V2BulkElementResultErrorSchemas`

```typescript
const value: shared.V2BulkElementResultErrorSchemas = /* values here */
```

### `shared.V2BulkElementResultRevertTransactionSchemas`

```typescript
const value: shared.V2BulkElementResultRevertTransactionSchemas = /* values here */
```

