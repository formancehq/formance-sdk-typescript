# MetadataValue

A typed metadata value (string, integer, boolean, or null). Integer numbers are decoded exactly, including int64 bounds and values beyond 2^53. Integral decimal and exponent spellings are accepted; fractions and out-of-range values are rejected. String values must not contain NUL bytes. A value is limited to 16384 bytes by default; the effective ceiling comes from the cluster policy (`--metadata-max-value-bytes`). Exceeding it returns 400 with reason `METADATA_LIMIT_EXCEEDED`.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 128403;
```

### `boolean`

```typescript
const value: boolean = true;
```

