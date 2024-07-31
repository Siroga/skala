#!/usr/bin/bash
xset s off
xset s noblank
xset -dpms
unclutter -idle 0 &

cd /home/user/skala

#pm2 start  "npm run start" --name kos --wait-ready

pm2 start kos

echo "1"
sleep 15
echo "2"


chromium-browser http://localhost:8888/tv --user-data-dir="/home/pi/Documents/Profiles/01" --kiosk --noerrdialogs --disable-infobars --no-first-run --ozone-platform=wayland --enable-features=OverlayScrollbar --start-maximized --enable-auto-reload