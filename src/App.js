import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body">
    <header className="mainHeader">
        <img scr="img/uni.png" />
        <nav className="mainHeader">
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
    </header>
    <br />
    <br />
    <div className="mainContent">
        <div className="content">
            <article className="topcontent">
                <header className="mainHeader">
                    <h2><a href="#" title="First post">First post</a> </h2>
                </header>
                <footer>
                    <p className="post-info">This post is written by Thirumala</p>
                </footer>
                <content>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit saepe sequi minima eligendi, praesentium corporis cum nesciunt fugit quae ab numquam dolorum quisquam impedit illo perspiciatis iure beatae. Maiores..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iste, dolorem quas soluta tenetur quo quaerat assumenda esse cum nobis corrupti vero, laboriosam debitis praesentium odio optio nulla porro. Aliquam.</p>
                </content>

            </article>
            <br/>
            <article className="bottomcontent">
                <header className="mainHeader">
                    <h2><a href="#" title="Second post">Second post</a> </h2>
                </header>
                <footer>
                    <p className="post-info">This post is written by Narayanaswamy</p>
                </footer>
                <content>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit saepe sequi minima eligendi, praesentium corporis cum nesciunt fugit quae ab numquam dolorum quisquam impedit illo perspiciatis iure beatae. Maiores..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iste, dolorem quas soluta tenetur quo quaerat assumenda esse cum nobis corrupti vero, laboriosam debitis praesentium odio optio nulla porro. Aliquam.</p>
                </content>

            </article>
        </div>
    </div>
    <aside className="top-sidebar">
        <article>
            <h2>Top sidebar</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt tempora iure, eos aliquid reprehenderit vel? Nesciunt, odio velit veritatis vero minus commodi enim in eos, quos, totam optio? Quam.</p>

        </article>
    </aside>
    <aside className="middle-sidebar">
        <article>
            <h2>Middle sidebar</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt tempora iure, eos aliquid reprehenderit vel? Nesciunt, odio velit veritatis vero minus commodi enim in eos, quos, totam optio? Quam.</p>
            
        </article>
    </aside>
    <aside className="bottom-sidebar">
        <article>
            <h2>Bottom sidebar</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt tempora iure, eos aliquid reprehenderit vel? Nesciunt, odio velit veritatis vero minus commodi enim in eos, quos, totam optio? Quam.</p>
            
        </article>
    </aside>
    <footer className="mainFooter">
        <p>Copyrigth &copy:2022<a href="#" title=""webdeveloper> devikawebdeveloper.com</a></p>

    </footer>
    
</div>
  );
}

export default App;
