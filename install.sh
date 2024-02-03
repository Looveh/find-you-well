OUT=find-you-well

bun build ./main.ts --compile --outfile $OUT
sudo ln -sf $(realpath $OUT) /usr/local/bin/
