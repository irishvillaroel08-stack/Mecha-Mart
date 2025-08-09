const currency=(n,code='NZD')=>new Intl.NumberFormat('en-NZ',{style:'currency',currency:code}).format(n);
async function loadProducts(){const r=await fetch('products.json');return r.json();}
function getCart(){try{return JSON.parse(localStorage.getItem('cart_v1')||'[]')}catch(e){return []}}
function setCart(items){localStorage.setItem('cart_v1',JSON.stringify(items));updateCartBadge();}
function addToCart(item){const cart=getCart();const idx=cart.findIndex(i=>i.id===item.id);if(idx>-1){cart[idx].qty+=item.qty}else{cart.push(item)}setCart(cart);toast('Added to cart');}
function removeFromCart(id){setCart(getCart().filter(i=>i.id!==id));}
function updateQty(id,qty){const cart=getCart();const idx=cart.findIndex(i=>i.id===id);if(idx>-1){cart[idx].qty=Math.max(1,parseInt(qty,10)||1);setCart(cart)}}
function cartTotals(){const cart=getCart();const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);const shipping=cart.length?10:0;const total=subtotal+shipping;return {subtotal,shipping,total}}
function updateCartBadge(){const n=getCart().reduce((s,i)=>s+i.qty,0);const b=document.querySelector('[data-cart-count]');if(b){b.textContent=n;b.style.display=n?'inline-flex':'none'}}
function parseQuery(){return Object.fromEntries(new URLSearchParams(location.search).entries());}
function toast(msg){let t=document.createElement('div');t.textContent=msg;Object.assign(t.style,{position:'fixed',bottom:'20px',left:'50%',transform:'translateX(-50%)',background:'#111',border:'1px solid #23232a',padding:'10px 14px',borderRadius:'10px',color:'#fff',zIndex:'1000',boxShadow:'0 6px 30px rgba(0,0,0,.4)'});document.body.appendChild(t);setTimeout(()=>t.remove(),1600);}document.addEventListener('DOMContentLoaded',updateCartBadge);