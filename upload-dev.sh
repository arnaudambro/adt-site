#!/bin/bash -e
# Get password from OS X Keychain function
# Replace %ACCOUNT_NAME% with account name of Keychain item
# See `man security` for more info
# if it is not working, check the kind of item - internet ? generic ?
get_pw () {
  sudo security 2>&1 >/dev/null find-internet-password -s "ftp.cluster023.hosting.ovh.net" -a "ambroselmp" -w \
  | sed 's/password: "\(.*\)"/\1/'
}

# https://serverfault.com/a/106365/583013
# https://misc.flogisoft.com/bash/tip_colors_and_formatting
# BE CAREFUL: with sftp RCD="kestuf/app" but with ftp RCD="/kestuf/app"
HOST="ftp.cluster023.hosting.ovh.net"
USER="ambroselmp"
PASS=`security find-internet-password -s "ftp.cluster023.hosting.ovh.net" -a "ambroselmp" -w`
FTPURL="sftp://$USER:$PASS@$HOST"
LCD="./public"
RCD="adt"

echo -e "\n\n\033[1;33mStarting to upload to FTP\n\n\033[0;39m"
lftp -c "set cmd:fail-exit yes ftp:list-options -a;
open '$FTPURL';
lcd $LCD;
cd $RCD;
mirror --reverse --delete-first --verbose --exclude-glob .DS_Store;"
echo -e "\n\n\033[1;33mTransfer completed 😬\n \n\033[0;39m"
