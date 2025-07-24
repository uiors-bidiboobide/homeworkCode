export function Down(count, countElement, redirectUrl) {
    // 倒计时数字减 1
    count--;
    // 更新页面上显示的倒计时数字
    countElement.textContent = count;

    if (count > 0) {
        // 若倒计时未结束，1 秒后再次调用 Down 函数并传递参数
        const timeoutId = setTimeout(() => Down(count, countElement, redirectUrl), 1000);
        // 可以返回定时器 ID 以便外部清除
        return timeoutId;
    } else {
        // 倒计时结束，跳转到指定页面
        window.location.href = redirectUrl;
    }
}