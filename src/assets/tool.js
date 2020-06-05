
function imgPreview(obj) {
    console.log('imgPreview')
    /* var file = obj.files[0];
    var img = obj.nextSbiling;
    // 可以进行一下文件类型的判断
    if (!/image\/\w+/.test(file.type)) {
        alert('请上传图片')
        return false;
    }
    // 图片大小的限制
    var fileSize = parseFloat(file.size / 1024 / 1024);
    if (fileSize > 2) {
        alert('图片大小不超过2MB')
        return false;
    }
    // 读取图片文件流
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        img.attr('src', e.target.result);
    }; */
}

function test() {
    console.log('tool 内的方法')
}

export {
    imgPreview, test
}
