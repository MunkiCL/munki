#!/bin/bash
args=("$@")
if [ "$args" == 'production' ]; then
	sed -i .bk "s/$baseurl:''/$baseurl:'\/munki'/g" app/_scss/_settings.scss
else
	sed -i .bk "s/$baseurl:'\/munki'/$baseurl:''/g" app/_scss/_settings.scss
fi
 rm -rf app/_scss/_settings.scss.bk