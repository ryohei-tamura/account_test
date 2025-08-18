const products = [
    { id: 1, name: '商品1', price: 1000 },
    { id: 2, name: '商品2', price: 2000 },
    { id: 3, name: '商品3', price: 5000 },
];

let cart = [];

// 商品一覧を表示
function renderProductList() {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <p>${products[i].name} - ¥${products[i].price}</p>
            <button class="add-to-cart" data-product-id="${products[i].id}">カートに追加</button>
        `;
        productListElement.appendChild(productElement);
    }

    // カートに追加ボタンにclickイベントのイベントリスナーを追加
    const buttons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-product-id'), 10);
            addToCart(productId);
        });
    }
}


// カートに商品を追加
function addToCart(productId) {
    let product = null;
    let cartItem = null;

    // products配列から該当する商品を探し変数productに代入
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    // カート内から該当する商品を探し、存在すれば、変数cartItemに代入
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === productId) {
            cartItem = cart[i];
            break;
        }
    }

    // カートに商品を追加orすでに存在する商品の場合は数量を増やす
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ product: product, quantity: 1 });
    }

    renderCart();
}

// カートを表示
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>カートに商品がありません。</p>';
    } else {
        for (let i = 0; i < cart.length; i++) {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${cart[i].product.name} x ${cart[i].quantity} - ¥${cart[i].product.price * cart[i].quantity}</p>
                <button class="remove-from-cart" data-product-id="${cart[i].product.id}">削除</button>
            `;
            cartItemsElement.appendChild(itemElement);


            // 削除ボタンにクリックイベントのイベントリスナーを追加
            const removeButton = itemElement.querySelector('.remove-from-cart');
            removeButton.addEventListener('click', function () {
                const productId = parseInt(removeButton.getAttribute('data-product-id'), 10);
                removeFromCart(productId);
            });


        }
    }

    updateCartTotal();
}

// カートの合計を更新
function updateCartTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
    }

    document.getElementById('cart-total').innerHTML = `<p>合計: ¥${total}</p>`;
}

// カートから商品を削除
function removeFromCart(productId) {
    const newCart = [];

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id !== productId) {
            newCart.push(cart[i]);
        }
    }

    cart = newCart;
    renderCart();
}


// 商品一覧を初期化
renderProductList();