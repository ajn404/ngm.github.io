[[toc]]
## style
<ClientOnly>
<responsive-images></responsive-images>
</ClientOnly>
### vertical-align默认baseline

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
