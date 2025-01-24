import { version, Component } from 'inferno';
import Logo from './Logo';

class App extends Component {
    render() {
        return (
            <header class="bg-slate-800 h-full text-white flex justify-center items-center flex-col">
                <Logo width="160" height="160" />
                <p class="mt-6">{`Welcome to Inferno ${version}`}</p>
                <ul>
                    <li>Compiled using SWC</li>
                    <li>Styled using Tailwind</li>
                    <li>Bundled using Webpack</li>
                    <li>Linted using ESLint</li>
                </ul>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        );
    }
}

export default App;
