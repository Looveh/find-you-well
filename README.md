# find-you-well

I can't begin to tell you how much time this script has saved me throughout the years.

## Usage

You need to have [Bun](https://bun.sh/) installed on your machine.

```sh
$ ./install.sh
  [18ms]  bundle  1 modules
 [120ms] compile  find-you-well

$ find-you-well "board gamers" + "I'm omw and will buy snacks on the way"
My dear board gamers, I hope this message finds you well.

It is with the utmost pleasure that I can hereby inform you that I'm omw and will buy snacks on the way.

Wishing you all the best, Niclas L. Nilsson, M.Sc.

$ find-you-well gf - "I'll be home late tonight"
Dear gf, I hope this message finds you well.

I am sorry to inform you that I'll be home late tonight.

Yours sincerely, Niclas L. Nilsson, M.Sc.
```

This will also copy the output of the program to your clipboard.
