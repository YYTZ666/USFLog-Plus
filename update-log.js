document.addEventListener("DOMContentLoaded", () => {
    // 版本号和URL
    const versionNumber = "1.0.0_OSA"; 
    const downloadLink = "https://example.com/download/usf-log-plus-1.0.5.zip"; 

    // 日志内容
    const updateLogs = [
        "使用ChatGPT优化了日志压缩算法和目标文件夹，提升性能。",
        "新增聊天信息API，JSON示例请看文档（文档暂时没出）",
        "修复了文件压缩时偶发性卡顿问题。",
        "完善了部分分类的逻辑。"
    ];

    document.getElementById("version-number").textContent = versionNumber;
    document.getElementById("download-link").href = downloadLink;

    
    const updateLogList = document.getElementById("update-log-list");
    updateLogList.innerHTML = ""; // 清空初始
    updateLogs.forEach(log => {
        const li = document.createElement("li");
        li.textContent = log;
        updateLogList.appendChild(li);
    });
});
