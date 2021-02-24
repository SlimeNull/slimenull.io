# 嗨! 这里是 Null 的博客!

<div id="blogs">
    <hr/>
    <div>
        <a href="/blog/113813184">
        	<h2>
                [.NET] WPF XAML 原理, 节点与实例, 以及一些重要的零碎知识点
            </h2>
            <div>
                当你查资料时, 看到那些眼花缭乱的 xaml 代码, 让人瞬间没有了学习的欲望… 先试着寻找下其中的规律吧.节点与实例:首先看看上面的文章, 从我们最常接触的 Button 入手吧. Button 是可以用 CS 代码来进行实例化, 然后放置在窗口中的, 而其它的元素, 例如根节点 Window, 都是可以通过 CS 代码进行实例化.可以推测出, 在 xaml 中, 一个个的节点, 例如 Button, Label, 其实就是等同于声明一个对应类型的实例.那么如何在 CS 代码中访问这个实例呢? 
            </div>
        </a>
    </div>
</div>
<script>
    function CreateBlogLinkBlock(title, description, url){
        let wholeBlockElement = document.createElement("div");
        let linkElement = document.createElement("a");
        let titleElement = document.createElement("h2");
        let descElement = document.createElement("div");
        linkElement.setAttribute("href", url);
        titleElement.innerText = title;
        descElement.innerText = description;

        linkElement.appendChild(titleElement);
        linkElement.appendChild(descElement);
        wholeBlockElement.appendChild(linkElement);
        
        return wholeBlockElement;
    }
    var blogReq = new XMLHttpRequest();
    if (blogReq) {
        blogReq.onload = function(e) {
            
        }
        blogReq.open("get", "/blogs/info.json", true)
    }
</script>

