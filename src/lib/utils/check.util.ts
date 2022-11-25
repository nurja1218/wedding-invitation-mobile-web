export function checkCurrentOS() {
    // 현재 디바이스의 os정보
    const deviceInfomation = navigator.userAgent.toLowerCase();
    if (deviceInfomation) {
        return {
            isAndroid: deviceInfomation.indexOf('android') > -1,
            isIos: deviceInfomation.indexOf('iphone') > -1,
        };
    }
}
