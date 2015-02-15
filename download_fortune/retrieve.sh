#!/bin/bash
for i in `ls | grep html`; do
  cat $i | grep cookie | grep colspan | awk 'BEGIN{FS=">"}{print $3}' | awk 'BEGIN {FS="<"}{print $1}' >> fortunes.txt
done
