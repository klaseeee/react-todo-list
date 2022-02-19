const root = document.querySelector('#root'); // create element using vanilla js
// const root = document.querySelector('#root');
// const element = document.createElement('h1');
// element.textContent = 'Hello from javascript';
// element.className = 'heading-1';
// root.appendChild(element);
// create element using react
// const h1 = React.createElement('h1', {
//  children : 'Hello from React!',
//  className : 'heading-1'
// }); 
// const p1 = React.createElement('p', {
// 	children : 'Ini adalah paragraf 1'
// });
// const p2 = React.createElement('p', {
// 	children : 'Ini adalah paragraf 2'
// });
// const element = React.createElement(React.Fragment, {
// 	children : [h1, p1, p2] -> children bisa berbentuk array
// });
// create a list using react
// const element = React.createElement('ul', 
// 	{className : 'list'},
// 	React.createElement('li', null, 'apple'),
// 	React.createElement('li', null, 'mango'),
// 	React.createElement('li', null, 'pineapple')
// ); 
// introduction to jsx
//  const element = (
// 	<ul>
// 		<li>purple</li>
// 		<li>orange</li>
// 		<li>melon</li>
// 	</ul>
// ); 
// embed variabel to jsx
// const name = 'Muklas Nur Ardiansyah';
// const element = <h1>Hello {name}</h1>
// component dan props atau property
// function Halo (props) {
//     return <h3>hello {props.name}</h3>
// }
// const element = (
//     <div>
//         <Halo name="Muklas NA" />
//         <Halo name="Herman" />
//         <Halo name="Bambang" />
//     </div>
// );
// ReactDOM.render(element, root);
// const time = () => {
//     const element = (
//         <div>
//             <h1>Waktu Sekarang</h1>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//          // rendering
//          ReactDOM.render(element, root);
//     }
// setInterval(function(){
//     time();
// }, 1000);
// inline styling
// const element = (
//     <div>
//         <div style={{ width:200, height:200, backgroundColor: 'skyblue' }}></div>
//         <div className='box'></div>
//     </div>
// )
// ReactDOM.render(element, root);
//event handling
// const notif = msg => alert(msg);
// function clickMe () {
//     document.body.classList.toggle('biru');
// }
// const element = (
//     <div>
//         <button onClick={clickMe}>
//             Change Color
//         </button>
//         <button onClick = {notif.bind(this, 'Hello There!')}>
//             Click Me!
//         </button>
//     </div>
// );
// ReactDOM.render(element, root);
// function App () {
//     // const state = React.useState(0);
//     // const count = state[0];
//     // const updateCount = state[1];
//     // destructuring code
//     const[count, setCount] = React.useState(0);
//     return (
//         <div>
//             <button onClick={() => setCount(count - 1)}>kurang</button>
//             <span>{count}</span>
//             <button onClick={() => setCount(count + 1)}>tambah</button>
//         </div>
//     )
// }
// rendering
// ReactDOM.render(<App />, root);
// component lifecycle
// console.log(document.getElementById('judul')); // jika kita mencoba mengambil element dengan id judul sebelum komponen itu di render, maka hasilnya adalah null
// function App () {
//     const [click, setClick] = React.useState(false);
//     const [count, setCount] = React.useState(0);
//     React.useEffect(function() {
//         console.log(document.getElementById('judul')); //React.useEffect merupakan function yang akan dieksekusi jika ada perubahan pada component
//         return function () {
//             console.log('destroy');
//         }
//     }); //parameter kedua pada function React.useEffect berfungsi untuk memantau perubahan yang terjadi pada function click berdasarkan contoh di atas dan bisa diisi []
//     return (
//         <>
//             <h1 id="judul">Hello World!</h1>
//             <button onClick={()=>setClick(true)}>Click Me!</button>
//             <button onClick={()=>setCount(count+1)}>Tambah</button>
//             <span>hasil: {count}</span>
//         </>
//     )
// }
// ReactDOM.render(<App />, root);
// console.log(document.getElementById('judul')); // jika kita mencoba mengambil element dengan id judul setelahm komponen itu di render, maka hasilnya adalah <h1 id="judul">Hello World!</h1>
// namun cara tadi tidak tepat karna jika renderingnya mengalami delay, maka hasilnya akan tetap null. hal itu disebabkan oleh sintaks console.log akan terlebih dahulu dieksekusi sebelum rendering dilakukan.
// conditional rendering
// function App () {
//     const [login, setLogin] = React.useState(false);
//     // if(login) {
//     //     return (
//     //         <>
//     //             <h1>Selamat anda telah login!</h1>
//     //             <button onClick={function(){setLogin(false)}}>Logout</button>
//     //         </>
//     //     )
//     // }
//     return (
//         <>
//             <h1>Selamat Datang!</h1>
//             <p>{login ? 'Kamu sudah login!' : 'Kamu belum login!'}</p>
//             <button onClick={function(){setLogin(true)}}>{login ? 'Logout' : 'Login'}</button>
//         </>
//     )
// }
// ReactDOM.render(<App/>, root)
// DOM manipulation using document get element
// function App () {
//     const [login, setLogin] = React.useState(false);
//     React.useEffect(function() {
//         const judul = document.getElementById('judul');
//         setTimeout(function(){
//             judul.textContent = 'Halo Halo';
//         }, 1000);
//     })
//     return (
//         <>
//             <h1 id="judul">Hello There!</h1>
//             <button onClick={() => setLogin(true)}>Login</button>
//         </>
//     )
// }
// ReactDOM.render(<App/>, root);
// DOM manipulation using React.useRef
// function App () {
//     const [login, setLogin] = React.useState(false);
//     const judulRef = React.useRef(null);
//     React.useEffect(function() {
//         judulRef.current.textContent = 'Halo Dunia';
//     })
//     return (
//         <>
//             <h1 ref={judulRef}>Hello There!</h1>
//             <button onClick={() => setLogin(true)}>Login</button>
//         </>
//     )
// }
// ReactDOM.render(<App/>, root);
// React list and keys
// function App () {
//     const fruits = ['Apple', 'Mango', 'Banana', 'Watermelon'];
//     return (
//         <ul>
//             {/* {fruits.map(function(fruit){
//                 return <li>{fruit}</li>
//             })} */}
//             {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
//         </ul>
//     )
// }
// ReactDOM.render(<App/>, root);
// react form -> uncontrolled component
// function App () {
//     const namaRef = React.useRef(null);
//     function kirim (e) {
//         e.preventDefault();
//         const nama = namaRef.current.value;
//         console.log(`halo ${nama}`);
//     }
//     return (
//         <form onSubmit={kirim}>
//             <div>
//                 <label>Name:
//                     <input type="text" name="nama" ref={namaRef}></input>
//                 </label>
//                 <label>Age:
//                     <input type="number"></input>
//                 </label>
//                 <button>Send</button>
//             </div>
//         </form>
//     )
// }
// ReactDOM.render(<App/>, root);
// controlled component
// function App () {
//     const[name, setName] = React.useState('muklas');
//     function kirim (e) {
//         e.preventDefault();
//         console.log(`halo ${name}`);
//     }
//     return (
//         <form onSubmit={kirim}>
//             <div>
//                 <label>Name:
//                     <input type="text" name={name} value={name} onChange={function(e){
//                         setName(e.target.value);
//                     }}/>
//                 </label>
//                 <label>Age:
//                     <input type="number"/>
//                 </label>
//                 <button>Send</button>
//             </div>
//         </form>
//     )
// }
// ReactDOM.render(<App/>, root)
// data fetching
// function App () {
//     React.useEffect(function() {
//         const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(response => response.json()).then(response => console.log(response))
//         console.log(getData);
//     }, []);
//     return (
//         <>
//             <h1>Data Fetch</h1>
//         </>
//     )
// }
// ReactDOM.render(<App/>, root)
// data fetch using async function
// function App () {
//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);
//     React.useEffect(function() {
//         async function getData () {
//             const request = await fetch ('https://api.spaceflightnewsapi.net/v3/blogs');
//             const response = await request.json();
//             setNews(response);
//             setLoading(false);
//         }
//         getData();
//     }, [])
//     return (
//         <>
//             {loading ? 'Loading data...' : 
//                 <ul>
//                     {news.map(function(item) {
//                         return <li key={item.id}>{item.title}</li>
//                     })}
//                 </ul>
//             }
//         </>
//     )
// }
// ReactDOM.render(<App/>, root)