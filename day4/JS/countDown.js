import { Down } from "./down.js";

// 获取显示倒计时的 span 元素
const countElement = document.querySelector("span");

// 检查 countElement 是否存在
if (countElement) {
    // 获取初始倒计时数字
    const countText = countElement.textContent;
    const count = parseInt(countText, 10);

    // 检查解析结果是否为有效数字
    if (!isNaN(count)) {
        // 启动倒计时
        Down(count, countElement, "https://www.baidu.com");
    } else {
        console.error("倒计时显示内容不是有效的数字");
    }
} else {
    console.error("未找到显示倒计时的 span 元素");
}