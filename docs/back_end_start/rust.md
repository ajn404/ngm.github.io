```bash
 curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

```bash
rustup update
```

```bash
rustc --version
```


```rust
fn main() {
    println!("Hello, world!");
}
```

```bash
cargo
```



## why rust

## technical rust goodies

## 基础数据类型
- 布尔值
- 整型
- Double/Float
- Character 单引号
- String 双引号

```rust
let mut my_name = "BILL"
my_name = "JACK"
```

## functions

```rust
fn add(a:i32,b:i32)-> i32{
    a+b
}

let x = add(1,1);


```

## println macro

```rust

let life = 42;
println!("{:?} {:?}",life,life)
```

## control flow using "if"
```rust
let a = 99;
if a>99 {
    println!("Big number");
} else {
    println!("small number");
}

```

## repetition using loops
infinite loop
```rust
let mut a = 0 ; 
loop {
    if a===5 {
        break;
    }
    println!("{:?}",a);
    a=a+1;
}

```
while loop
```rust
let mut a =0;
while(a!= 5){
    println!("{:?}",a);
    a=a+1;
}

```

## tool install
- rustup
- vscode
- rustup toolchain install stable
- cargo


## match
```rust
fn main(){
    let some_bool = true;
    match some_bool {
        true => println!("true"),
        false => println!("false"),
    }
}

```

```rust
fn main(){
    let some_bool = 'C';
    match some_bool {
        'A' => println!("true"),
        'B' => println!("false"),
        _ => println!("else"),
    }
}

```

## loop
```rust
fn main(){
    loop {
        println!("hello");
        break;
    }
}
```

```rust
fn main(){
    let mut x = 3;
    loop{
        println!("{:?}",x)
        x = x-1;
        if(i<1){
            break;
        }
    }
    println!("done")
}
```

## while
```rust
fn main(){
    let mut i = 10;
    while i>2{
        println!("{:?}",i);
        i = i -1
    }
}

```

## work with data
enum
```rust
enum Direction{
    Up,Down,Left,Right
}

fn which_way(go: Direction){
    match go{
        Direction::Up=>println!("Up"),
        Direction::Down=>println!("down"),
        Direction::Left=>println!("Left"),
        Direction::Right=>println!("right"),
    }
}


fn main(){
    which_way(Direction::Left);
    which_way(Direction::Right);
    which_way(Direction::Up);
    which_way(Direction::Down);
}
```

struct
```rust
struct GroceryItem {
        stock:i32,
        price:f64,            
} 

fn main(){
    let cereal = GroceryItem {
        stock:10,
        price:1.22,
    };
    println!("stock:{:?}",cereal.stock);
    println!("price:{:?}",cereal.price);
}
```
引用结构体成员给其他变量赋值时，要注意：所有权的转移可能会破坏结构体变量的完整性。

```rust
 print_fn(dr);
   |              -- value moved here
26 |     println!("{:?}",dr.fluid_oz);
   |                     ^^^^^^^^^^^ value borrowed here after move
```

```rust
enum Flavor {
    Spark,
    Sweet,
    Fruity,
}

struct drink {
    flavor:Flavor,
    fluid_oz:f64,
}

fn print_fn(dr:drink){
    match dr.flavor{
        Flavor::Spark=>println!("spark"),
        Flavor::Fruity=>println!("fruity"),
        Flavor::Sweet=>println!("Sweet"),
    }
    println!("{:?}",dr.fluid_oz);
}

fn main(){
    let dr = drink{
        flavor:Flavor::Spark,
        fluid_oz:1.5,
    };
    let cl = dr.fluid_oz.clone();
    print_fn(dr);
    println!("{:?}",cl);

  
} 
```