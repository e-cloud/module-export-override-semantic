## Sample Repo for wrong interpretation of module export

This problem originates from https://github.com/webpack/webpack/issues/1792. Thanks @loganfsmyth. Read through it then continue.

> Note: the third case is invalid. see [early-errors](http://www.ecma-international.org/ecma-262/7.0/#sec-module-semantics-static-semantics-early-errors)

---
According to the v7 specification's [[sec: resolve-export]](http://www.ecma-international.org/ecma-262/7.0/#sec-resolveexport),

<h4 id="expected-output"></h4>
the expected output ought to be:

```
undefined

a-foo

c-foo
```

However, the output transpiled by babel and tsc are both wrong somehow.

see [test-output.txt](./test-output.txt)
