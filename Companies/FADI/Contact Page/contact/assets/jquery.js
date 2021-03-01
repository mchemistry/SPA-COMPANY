$(document).ready(function() {
    var loading = null;
    var message = null;
    var showMessage = null;
    var isSuccess = null;

    //set up notifications
    var notification = $('.notification')
    var iSuccess = $('.icon-success');
    var iError = $('.icon-error');
    var iMessage  = $('.contact-message');
   

    //hide notification and reset
    function hideNotificationAndReset() {
        iSuccess.css('display', 'none');
        iError.css('display', 'none');
        iMessage.html('');
        notification.css('display', 'none');
    }

    //show notification when submit success
    function showNotificationWhenSuccess(res) {
        iSuccess.css('display', 'inline-block');
        iError.css('display', 'none');
        iMessage.html(res);
        notification.removeClass('error').addClass('success slide-left');
        notification.css('display', 'flex');
    }

    //show notification when submit errpr
    function showNotificationWhenError(res) {
        iSuccess.css('display', 'none');
        iError.css('display', 'inline-block');
        iMessage.html(res);
        notification.removeClass('success').addClass('error slide-left');
        notification.css('display', 'flex');
    }



    var textBtn = $('.contact-btn--submit-text');
    var threeDotLoading = $('.three-dot-loading');
    var btnLoading = $('.contact-btn-submit')
    var name = $('#fullname');
    var phone = $('#phone');
    var subject = $('#subject');
    var formContact = $('#form-contact');

    function resetForm() {
        name.val('')
        phone.val('');
        subject.val('');
    }

    function isValidInputBeforeSubmit() {
        if(!name || !phone || !subject || name.val() === '' || phone.val() === "" || subject.val()==="" || !$.isNumeric(phone.val()))
        {
            return false;
        }
        return false;
    }

    function onSubmit(){
        if(!isValidInputBeforeSubmit()) {
            showNotificationWhenError('Thông tin không được để trống hoặc bạn nhập sai định dạng!')
            setTimeout(function() {
                notification.addClass('slide-right');
            setTimeout(function(){
            hideNotificationAndReset()
            }, 300)
            }, 30000000)
        } else {
            showNotificationWhenSuccess('Cảm ơn bạn, chúng tôi sẽ sớm liên hệ với bạn!');
            setTimeout(function() {
                notification.addClass('slide-right');
            setTimeout(function(){
            hideNotificationAndReset()
                }, 300)
            }, 300000000)
        }
        
    }
    $("#form-contact").submit(function(e){
        onSubmit();
        e.preventDefault(e);
    });
});