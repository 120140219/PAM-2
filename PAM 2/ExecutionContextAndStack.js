function a () {
    console.log(' berada pada fungsi pertama')

    function b () {
        console.log(' berada pada fungsi kedua')

        function c () {
        console.log(' berada pada fungsi ketiga')
        }
        c();
    }
    b();
}
a();