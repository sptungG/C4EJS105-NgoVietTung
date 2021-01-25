# CSS
## 1. CSS là gì?
##  .Nhúng CSS vào wedsite
##  .Selector
##  .Đơn vị đo lường trong CSS
##  .Các thuộc tính văn bản 
##  .Font chữ
***
- CSS (Cascading Style Sheets), là ngôn ngữ đc sử dụng để tìm và dịnh dạng lại các phần tử đc tạo bởi các ngôn ngữ đánh dấu, như HTML. màu sắc, màu chữ, cấu trúc,...
```css
Cấu trúc(Structure): 
selector{
        property: value;
        property: value;
        }
```
* Nhúng CSS(2 cách):
   * Inline: `<style>` `</style> `
   * External: `<link>` 
```html
    <style type="text/css">
       p {
        color: blue;
        font-family: Arial;
       }
    </style>
  </head>
  <body>
    <p>Đây là một đoạn chữ đã được định dạng với CSS</p>.
  </body>
```
```css
name.css
p {
  color: blue;
  font-family: Arial;
}
```
```html
  <head>
    <meta charset="utf-8" />
    <title>Inline Styles</title>
     <link rel="stylesheet" href="name.css" />
  </head>

  <body>
    <p>Đây là một đoạn chữ đã được định dạng với CSS</p>.
  </body>
</html>
```
* Selector: 
   * thẻ : `<p>`; `<div>`; ...
   * id: `#id`
   * class: `.class`
* Đơn vị **`px, pt, %, em, rem`**.
   * [[HỌC CSS] TÌM HIỂU VỀ ĐƠN VỊ PX, PT, PERCENTAGES, EM VÀ REM](https://thachpham.com/web-development/html-css/cac-don-vi-do-luong-trong-css.html)
* Các thuộc tính văn bản:
   * `text-align: left|right|center|justify;` căn lề văn bản.
   * `text-decoration: overline | underline | line-through| none;` Trang trí văn bản.
   * `text-indent: value;` thêm khoảng trắng bên trái văn bản
   * `text-shadow: [màu sắc] [tọa độ x y] [độ mờ];` `text-shadow: red 2px -1px 3px, blue -2px 1px 2px;` chữ bóng đổ. 
   * `text-transform: capitalize|uppercase|lowercase;` tùy chỉnh hiển thị.
* Font chữ
   * `font-family: tên-font, tên-font-backup, tên-font-backup,...;` tên font đầu tiên sẽ ưu tiên hiển thị, nếu máy tính người dùng không có font đó thì nó sẽ sử dụng font backup tiếp theo và cứ tiếp tục như thế.
   * `font-style: normal|italic(oblique)|;`
   * `font-weight: 100, 200, 300,.. ;` ctrl + &lt;space&gt; để biết thêm
   * `color: #_____ or name-color;`
   * `font-size: value;`
***
## 2.Block & inline 
##  .Div và bố cục tạo Wedsite
##  .BoxModel & các thuộc tính
##  .Điều chỉnh kích thước
##  .Box-sizing
##  .Màu nền & ảnh nền (background)
##  .Chia cột với Float & clear float
##  .Reset CSS
***
* Block & Inline
   * CSS Layout: kĩ thuật dựng bố cục Wed dựa trên việc sử dụng và tùy biến các khối, phần tử. -> Block ; Inline
   * Block: các thẻ có chức năng tạo 1 khối : &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;h_&gt;, &lt;div&gt;...
   * Inline: khi khai báo vào 1 nội dung thì nó vẫn sẽ nằm chung 1 dòng với các văn bản khác.: &lt;b&gt;, &lt;strong&gt;, &lt;i&gt;, &lt;u&gt;, ....
   * Chúng ta có thể đổi kiểu hiển thị một phần tử bất kỳ từ Inline sang Block và ngược lại.: &lt;table&gt; vói thuộc tính display trong CSS,...
* Div & Bố cục Wedsite: 
   * **header --> content --> slidebar --> footer**
* **Boxmodel:**
   * Margin: khoảng cách tính từ bên ngoài của phần tử.(border -> out)
     * `margin-top|bottom|left|right: value;` 
   * Boder: đường viền của phần tử.
     * `border: [size] [type] [color];` 
     * *`type: solid, dotted, double, groove, ridge, inset, outset.`*
     * *`border-top|bottom|left|right`*
     * [Xem thêm về Border](https://www.w3schools.com/css/css_border.asp)
   * Padding: khoảng cách tính từ bên trong của phần tử.(content -> border)
     * `padding-top|bottom|left|right: value;` 
     * 20px 10px --> *top & bottom sẽ có 20px ,và left & right sẽ có 10px*.
     * 20px --> *tự căn đều cả 4 mặt 20px*.
   * Content:  Nội dung trg phần tử.
* Điều chỉnh kích thước
   * height max-height min-height
   * width max-width min-width
* BoxSizing
   * [Xem thêm Box-sizing](https://thachpham.com/web-development/html-css/hoc-css-tim-hieu-box-sizing.html)
* Màu nền + Ảnh nền.
   * `background-image: url('ảnh 1')__ , url('ảnh 2')__;`
   * Default: *hình ảnh sẽ được lặp đi lặp lại theo cả chiều ngang và chiều dọc cho đến khi ảnh nền lấp toàn bộ phần tử.*
   * -> `background-repeat: no-repeat|repeat-x|repeat-y|space|round|repeat;`
   * `background-position: top|bottom|left|right|center|y-x`
* Chia Cột & Float:
   * Việc chia cột trong CSS là việc bạn *thiết lập những phần tử con trong một phần tử mẹ nằm trên cùng một hàng.*
   * 
   ```html
   <div id="content" class="container">
   <div id="post">Nội dung của #post</div>
   <div id="sidebar">Nội dung của #sidebar</div>
   ```
   * 
   ```css
   .container {
   width: 960px;
   border: 1px solid #333;
   padding: 10px;
   }
   #post {
   width: 660px;
   height: 150px;
   background: #e8e8e8;
   }
   #post {
   width: 660px;
   height: 150px;
   background: #e8e8e8;
   }
   ```
*--> container nó bị co lại bên trên. Nói đúng hơn là bây giờ thằng post và sidebar đã nhảy ra khỏi cái container luôn rồi*
*-->khi tiến hành float các phần tử, việc bạn nên làm là phải tạo ra điểm kết thúc cho việc float này* 
   * ==> clear float
     * `overflow: auto;` cho `container` là được.
     * `.clear { clear: both }`
        ```html
        <div id="content" class="container">
        <div id="post">Nội dung của #post</div>
        <div id="sidebar">Nội dung của #sidebar</div>
        <div class="clear"></div>
        </div>
        ```
* Reset CSS
   *  *dùng CSS viết lại theo ý của mình để đảm bảo nó hiển thị tốt trên tất cả các trình duyệt.-->Reset CSS*
   * 
   ```css
   * {
    padding: 0;
    margin: 0;
    border: none;
     }
   ```
***
## 3.Tùy biến hiển thị danh sách (List)
##  .Tùy biến loại phần tử (display)
##  .Position & Absolute -Relative
##  .Pseudo Class 
##  .Menu Ngang
##  .Menu dọc
***
* Tùy biến List: *để tùy biến danh sách trong CSS, chúng ta sẽ sử dụng thuộc tính list-style để làm.*
   * [Xem thêm](https://thachpham.com/web-development/html-css/tuy-bien-danh-sach-list-voi-css.html)
*  Display
   * 
   ```html
   <h3>Đưa các danh sách về dạng inline</h3>
   <ul>
   <li class="inline">List Item 1</li>
   <li class="inline">List Item 3</li>
   <li class="inline">List Item 4</li>
   <li class="inline">List Item 5</li>
   </ul>
   <h3>Đưa các thẻ a về block</h3>
   <a href="http://thachpham.com" class="block">Link 1</a>
   <a href="http://thachpham.com" class="block">Link 1</a>
   <a href="http://thachpham.com" class="block">Link 1</a>
   <h3>Ẩn phần tử</h3>
   <p class="none">Ở đây có văn bản nè pa.</p>
   ```
   * 
   ```css
   .inline {
      display: inline;
    }
    .block {
         display: block;
         background: #e8e8e8;
         margin: 5px 0;
    }
     .none {
         display: none;
    }
   ``` 
   * `display: inline|inline-block|block|list-item|none`  
* Position & Absolute - Relative.
   * `position: relative|absolute|fixed|static;`
   * `top|bottom|left|right: value;`
     * *relative*: phần tử hiển thị ko ảnh hưởng đến ban đầu.: ghi đè lên văn bản, ảnh.
         ```html
         <img src="https://i.imgur.com/odWztph.jpg" width="250px" height="auto" />
         ``` 
         ```css
         img {
             position: relative;
             top: 85px;
             left: 85px;
             /* */ 
             border: 1px solid #333;
             padding: 2px;
             }
         ```
    * *absolute*: phần tử hiển thị chỉ trong phạm vi phần tử mẹ. 
        ```html
             <div id="container">
              <div id="relative">
               <img src="https://i.imgur.com/odWztph.jpg" id="absolute" width="150px" height="auto" />
              </div>
             </div>
        ```
        ```css
               #absolute {
                   position: absolute;
                   right: 0;
                   bottom: 0;
                   }
        ```     
    * *fixed*: phần tử hiển thị luôn đi theo thanh cuộn.
        ```html
                <ul id="menu">
                  <li>Trang chủ</li>
                  <li>Diễn đàn</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li> 
                </ul>
        ```
        ```css
            body {
                  width: 960px;
                  margin: 0 auto;
                   }
            #menu {
                padding: 0 32px;
                margin: 0;
                width: 500px;
                position: fixed;
                background: #334793;
                color: #fff;
                }
            #menu li {
                line-height: 2em;
                margin-right: 15px;
                list-style-type: none;
                display: inline;
                }
        ```          
* Pseudo Class: 
     * `#link:hover{ ____ }`
     * Thông dụng:
         * `:hover` - Chọn trạng thái khi rê chuột vào một phần tử.
         *  `:visited` – Được sử dụng cho liên kết, chọn liên kết khi đã được truy cập (dựa vào History trên trình duyệt).
         * `:link` – Được sử dụng cho liên kết, chọn liên kết khi chưa nhấp vào.
         * `:active` – Chọn phần tử khi họ chọn/nhấp vào.
     * 
     ```html
     <h4>Ví dụ về liên kết</h4>
     <a href="http://hoidap.thachpham.com" target="blank">Forum ThachPham Blog</a>
     <h4>Ví dụ đổi màu block</h4>
     <div id="box">
     </div>
     ```   
     ```css
     /*==Ví dụ về liên kết ==*/
       a {
          color: red;
          text-decoration: none;
         }
       a:hover {
          color: blue !important; /* Ưu tiên với !important */ 
         }
       a:visited {
         color: purple;
         }
       a:active {
         color: green;
         }
         /*==Ví dụ về các phần tử khác ==*/
      #box {
          width: 150px;
          height: 150px;
          background: red;
         }
      #box:hover {
         background: blue; 
         }
      #box:active {
         background: green;
         }
     ```  
     * [codeViDu](https://codepen.io/thachpham92/pen/pvXGMd)
* *MENU*
     * [menu Ngang](https://thachpham.com/web-development/html-css/ky-thuat-tao-menu-ngang-css.html)     
***
## 4.Thực hành tạo Layout cơ bản
##  .CSS framework
##  .Chuyển động với transition
##  .Thay đổi hình dạng với transform
