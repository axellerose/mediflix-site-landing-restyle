#./

REMOTE_DIST="/home/app/mediflix-site/public"
HOST="mediflix.tv"
USER="developer"
SRC="public"

# echo "${USER}@${HOST}";
# ssh ${USER}@${HOST} "rm -rf ${REMOTE_DIST}-tmp && mkdir ${REMOTE_DIST}-tmp" && echo "Tmp directory removed" &&
# scp -r ${SRC}/* ${USER}@${HOST}:${REMOTE_DIST}-tmp && echo "Files successfully copied to remote tmp folder" &&
# ssh ${USER}@${HOST} "rm -rf ${REMOTE_DIST} && mv ${REMOTE_DIST}-tmp ${REMOTE_DIST}" && echo "Complete"

ssh ${USER}@${HOST} "rm -rf ${REMOTE_DIST}-tmp && mkdir ${REMOTE_DIST}-tmp" && echo "Tmp directory removed"