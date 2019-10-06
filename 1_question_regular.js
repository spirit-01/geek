let text="тут очень 'длинный' текст 'со' множеством 'одиночных' и aren't кавычек ";
console.log(text.replace(/(\s'|'\s)/g , ' " '));

