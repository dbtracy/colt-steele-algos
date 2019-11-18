HASH TABLES

What is a hash table?
- used to store key-value pairs (so are arrays)
- keys are not ordered (unlike arrays)
- fast for finding values, adding values, removing values

Why?
- nearly every langauge has some sort of hash structure
  - Python: dictionaries
  - JS: objects and Maps
  - Java, Go, Scala: Maps
  - Ruby: hashes
- they are commonly used because they're fast

Example:

Imagine we wanted to store colors. We could use array/list.
It would be nice to use names instead of hex numbers for readability.
colors['cyan'] is better than colors[2]
