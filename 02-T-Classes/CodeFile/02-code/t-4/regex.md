## Regular Expression

"[a-z]" --> String
/[a-z]/ --> Regex Pattern

input = "1234567890"
/pattern/.test(input) ---> Boolean (true, false)


/[a-z]g/.test("Yntp") --> false;
/[a-z]/.test("Yntp") --> true;

/[a-z]/.test("yntp") --> true;
/[A-Z]/.test("yntp") --> true;

/[0-9]/.test("1234") --> true;
/[0-9]g/.test("aa22") --> false;
/[0-9]/.test("aa22") --> true;
/\d/.test("aa22") --> true;

\^\d[a-z][A-Z]