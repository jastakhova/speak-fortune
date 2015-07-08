#!/bin/sh

path="../data"

acc=smth
api=smth
secret=smth

for myFile in `ls $path/`;
do
  echo $myFile;
  topic=${myFile%\.txt};
  counter=0;
  
  mkdir $topic;
  
  while read line; do
    ((counter++))
    value="$(perl -MURI::Escape -e 'print uri_escape($ARGV[0]);' "$line")"
    cs=`md5 -qs "317""$line""mp3T2""$acc""$api"$secret`
    curl "http://www.vocalware.com/tts/gen.php?EID=3&LID=1&VID=7&TXT=$value&EXT=mp3&FX_TYPE=T&FX_LEVEL=2&ACC=$acc&API=$api&SESSION=&HTTP_ERR=&CS=$cs" -o $topic/$counter.mp3
  done < $path/$myFile
done
