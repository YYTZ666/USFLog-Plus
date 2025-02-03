document.addEventListener("DOMContentLoaded", () => {
    // 最新版本
    const versionNumber = "1.0.5_OSA"; 
    const downloadLink = "https://usf-api.zuyst.top/USFLog-Plus/1.0.5_OSA.zip"; 

    // 更新日志内容 - 使用对象数组来包含版本信息和内容
    const updateLogs = [
        {
            version: "1.0.5_OSA",
            date: "2025-02-03",
            changes: [
                "全通道HTTPS支持。",
                "容器操作记录新增开箱者名字，操作记录将同时存到日期根目录和玩家根目录下。",
                "优化空间压缩功能。",
                "完善了调试信息支持。",
                "聊天API支持携带密钥推送。"
            ]
        },
        {
            version: "1.0.0_OSA",
            date: "2025-01-28",
            changes: [
                "使用ChatGPT优化了日志压缩算法和目标文件夹，提升性能。",
                "新增聊天信息API，JSON示例请看文档（文档暂时没出）",
                "修复了文件压缩时偶发性卡顿问题。",
                "完善了部分分类的逻辑。"
            ]
        },
        {
            version: "0.9.9_OSA",
            date: "2025-01-20",
            changes: [
                "Beta版本发布",
                "实现基础功能"
            ]
        }
    ];

    // 更新版本号和下载链接
    document.getElementById("version-number").textContent = versionNumber;
    document.getElementById("download-link").href = downloadLink;

    // 更新日志列表
    const updateLogList = document.getElementById("update-log-list");
    updateLogList.innerHTML = ""; // 清空初始内容

    // 遍历更新日志数组
    updateLogs.forEach(logEntry => {
        const li = document.createElement("li");
        
        // 创建版本标签
        const versionTag = document.createElement("span");
        versionTag.className = "version-tag";
        versionTag.textContent = `v${logEntry.version}`;
        
        // 创建更新内容容器
        const updateContent = document.createElement("div");
        updateContent.className = "update-content";
        
        // 如果有多个更新内容，创建无序列表
        if (logEntry.changes.length > 1) {
            const ul = document.createElement("ul");
            ul.style.listStyle = "none";
            ul.style.padding = "0";
            
            logEntry.changes.forEach(change => {
                const changeLi = document.createElement("li");
                changeLi.textContent = change;
                changeLi.style.marginBottom = "8px";
                ul.appendChild(changeLi);
            });
            
            updateContent.appendChild(ul);
        } else {
            // 如果只有一个更新内容，直接显示文本
            updateContent.textContent = logEntry.changes[0];
        }
        
        // 组装列表项
        li.appendChild(versionTag);
        li.appendChild(updateContent);
        updateLogList.appendChild(li);
    });

    // 更新历史更新日志链接
    const historyLink = document.querySelector(".history-link");
    if (historyLink) {
        historyLink.href = "https://github.com/YYTZ666/USFLog-Plus/releases"; // 设置实际的历史更新页面链接
    }
});
