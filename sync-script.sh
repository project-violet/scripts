#!/bin/bash
# crontab -l, */5 * * * * /home/ubuntu/sync-script.sh
cd scripts
node main.js
rm -f gg.js
wget https://ltn.hitomi.la/gg.js --header "referer: https://hitomi.la/"
python3 sync.py
git add gg.js
git add hitomi_get_image_list_v3.js
git pull
git push
