[[toc]]
## style
### vertical-align默认baseline
::: details 显示全部
```html
 <div class="box">
        <div class="item">和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        大家能看到
    </div>
```
```css
.box{
    height: 100px;
}
.item{
    /* vertical-align: top; */
    vertical-align: middle;
    display: inline-block;
}
```
:::