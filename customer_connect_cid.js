$(function () {

    window._ccReady = window._ccReady || [];
    window._ccReady.push(getCcProfileId);

});

function getCcProfileId(ccObject) {

    var cc_user_id = ($.trim(ccObject.user.id) != '') ? $.trim(ccObject.user.id) : '';
    document.cookie = "cc_uid=" + cc_user_id;
    window.cc_uid = cc_user_id;
}