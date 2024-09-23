# V2BulkElement

## Example Usage

```typescript
import { V2BulkElement } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElement = {
  action: "<value>",
  data: {
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
};
```

## Supported Types

### `shared.V2BulkElementAddMetadata`

```typescript
const value: shared.V2BulkElementAddMetadata = /* values here */
```

### `shared.V2BulkElementCreateTransaction`

```typescript
const value: shared.V2BulkElementCreateTransaction = /* values here */
```

### `shared.V2BulkElementDeleteMetadata`

```typescript
const value: shared.V2BulkElementDeleteMetadata = /* values here */
```

### `shared.V2BulkElementRevertTransaction`

```typescript
const value: shared.V2BulkElementRevertTransaction = /* values here */
```

