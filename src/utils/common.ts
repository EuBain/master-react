export const scrollPageTitle = scrollPageTitleFn()

function scrollPageTitleFn ():any{
   let titleScrollInterval:any
    return (title: string, flag: boolean) => {
        const originalTitle = title;
        const titleLength = originalTitle.length;
        let scrollPosition = 0;
  
        function animateTitle() {
            document.title = originalTitle.substr(scrollPosition, titleLength) + originalTitle.substr(0, scrollPosition);
            scrollPosition++;
            if (scrollPosition > titleLength) {
                scrollPosition = 0;
            }
        }
        if(titleScrollInterval) {
            clearInterval(titleScrollInterval);
        }
        if(!flag){
        //   console.log(titleScrollInterval)
          titleScrollInterval = null;
          document.title = title;
          return;
        }
    
        titleScrollInterval= setInterval(animateTitle, 1000); // 调整滚动速度
        // console.log(flag,titleScrollInterval);
        // 停止滚动标题，例如，当用户离开页面时
        // window.addEventListener('blur', function () {
        //     clearInterval(titleScrollInterval);
        //     document.title = originalTitle;
        // });
  
        // // 重新开始滚动标题，例如，当用户返回页面时
        // window.addEventListener('focus', function () {
        //     clearInterval(titleScrollInterval);
        //     titleScrollInterval = setInterval(animateTitle, 1000);
        // });
    }
}
const map: Record<string, Record<string, string>> = {
    '8889':{
        production: 'https://www.tayrsi.cn/react-micro1/',
        development: 'http://localhost:8889/react-micro1/'
    },
    '8890':{
        production: 'https://www.tayrsi.cn/react-micro2/',
        development: 'http://localhost:8890/react-micro2/'
    }
}

export function matchHost (host: keyof typeof map) {
try {
    if(process.env.NODE_ENV) {
        return map[host][process.env.NODE_ENV]}
} catch {
    console.log("process.env可能不存在")
    return map[host]['development']
}
}