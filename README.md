# 伟大接线计算程序

《伟大接线计算程序》是用来计算怎么样才能在占用空间最小（以及最美观）的情况下把错综复杂的线（如电脑主板电源线）接好。

## 使用方法

鉴于基本没人需要这种功能，使用方法我就大概一说（如果你真的很想知道使用方法可以告诉我一声）。

首先，测量每两根线之间会不会绞在一起，如果会，两根线位置关系如何时会绞在一起。
把这些记录在 `typescript/bin/demo.ts` 里并运行它（推荐使用 `ts-node` ，因为不需要生成 JS 文件），你将得到一份整理好的机器能识别（但你不一定能）的电线关系表。

之后，编译并运行 `line_pluging_calculator/src/main.rs` （推荐带上 `--release` 开关）。
这个程序会自己读取电线关系表（因为它很聪明，它知道关系表在哪里），如果它算出来了，就会显示在控制台上；如果没算出来，就会显示 `[]` ，表示空数组。

如果你觉得算得太慢，去修改 `line_pluging_calculator/src/lib.rs` 的第 20 行的那个数，改得越小算得越快，不过算出解的可能也越低，如果算不出解就改大点。

当你算完，你可以像 `typescript/bin/result-demo.ts` 中的实例一样把程序的输出进行格式化，帮助你得到真正的数据并应用在工程方面。

## 使用体验

挺神奇的，不过 27 条线算了一个多小时，感觉还是有点慢了。

## 使用前后对比

### Before

![杂乱不堪](https://cdn.luogu.com.cn/upload/image_hosting/36bitzvl.png)

### After

![利索整洁](https://cdn.luogu.com.cn/upload/image_hosting/dtk6ejwj.png)

