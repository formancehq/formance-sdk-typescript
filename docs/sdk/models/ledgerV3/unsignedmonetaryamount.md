# UnsignedMonetaryAmount

Arbitrary-precision unsigned BigUint value encoded as a JSON number by
default, or a canonical decimal string when Formance-Bigint-As-String
is enabled. The same rule applies to every response BigUint value,
including nested fields, regardless of business meaning.
JavaScript consumers should enable the header to avoid number rounding.



## Supported Types

### `BigInt`

```typescript
const value: BigInt = 464800n;
```

### `string`

```typescript
const value: string = "<value>";
```

