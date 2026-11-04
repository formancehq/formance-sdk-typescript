# Mode

Inspection mode. The deprecated distinct-values alias for distinctValues remains accepted. An explicitly empty or unsupported value returns 400.

## Example Usage

```typescript
import { Mode } from "@formance/formance-sdk/sdk/models/operations";

let value: Mode = "facets";
```

## Values

```typescript
"summary" | "distinctValues" | "facets"
```