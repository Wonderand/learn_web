document.getElementById('submit-button').addEventListener('click', function() {
    const userQuestion = document.getElementById('user-question').value;

    // 这里应替换为实际调用通义千问API的代码
    // 假设我们有一个函数 `fetchAnswer` 来获取回答
    fetchAnswer(userQuestion)
        .then(answer => {
            document.getElementById('bot-answer').textContent = answer;
        })
        .catch(error => {
            console.error('Error fetching answer:', error);
            document.getElementById('bot-answer').textContent = '抱歉，获取答案时出现错误，请稍后重试。';
        });
});

// 示例函数，实际应用中应替换为调用通义千问API的逻辑
function fetchAnswer(question) {
    return new Promise((resolve, reject) => {
        // 模拟异步请求延迟
        setTimeout(() => {
            resolve(`这是对您问题 "${question}" 的回答...`);
        }, 1500);
    });
}