#!/bin/sh

for i in `seq 1 16`;
do
  curl "http://www.fortunecookiemessage.com/archive.php?start=$((i*50))" > $((i))page.html 
done  
