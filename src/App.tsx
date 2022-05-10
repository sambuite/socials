import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  SpotifyLogo,
  TiktokLogo,
} from 'phosphor-react';
import { LinkItem } from './components/LinkItem';

const links = [
  {
    name: 'Portfolio',
    link: 'https://portfolio-sambuite.vercel.app',
  },
];

function App() {
  return (
    <div className="w-11/12 md:w-[44rem] mx-auto">
      <div className="flex flex-col items-center mt-10">
        <img
          src="https://github.com/sambuite.png"
          alt=""
          className="rounded-full w-28 h-28"
        />
        <h1 className="text-xl text-slate-100 font-semibold mt-2">
          Murilo Sambuite
        </h1>
        <span className="text-lg text-slate-500">@sambuite</span>
        <span className="mt-3 text-md font-mono text-slate-500">
          desenvolvedor frontend
        </span>
      </div>

      <div className="flex items-center justify-center mt-5 h-12">
        <a
          className="group"
          href="https://www.linkedin.com/in/murilosambuite/"
          target="_blank"
        >
          <LinkedinLogo className="w-10 h-10 mr-5 text-main-500 cursor-pointer group-hover:w-11 group-hover:h-11 transition-all" />
        </a>
        <a className="group" href="https://github.com/sambuite" target="_blank">
          <GithubLogo className="w-10 h-10 mr-5 text-main-500 cursor-pointer group-hover:w-11 group-hover:h-11 transition-all" />
        </a>
        <a
          className="group"
          href="https://open.spotify.com/user/22cpeuchmgltmldtoz3vb4cba"
          target="_blank"
        >
          <SpotifyLogo className="w-10 h-10 mr-5 text-main-500 cursor-pointer group-hover:w-11 group-hover:h-11 transition-all" />
        </a>
        <a
          className="group"
          href="https://www.instagram.com/sambuite_"
          target="_blank"
        >
          <InstagramLogo className="w-10 h-10 mr-5 text-main-500 cursor-pointer group-hover:w-11 group-hover:h-11 transition-all" />
        </a>
        <a
          className="group"
          href="https://www.tiktok.com/@sambuite"
          target="_blank"
        >
          <TiktokLogo className="w-10 h-10 mr-5 text-main-500 cursor-pointer group-hover:w-11 group-hover:h-11 transition-all" />
        </a>
      </div>

      <div className="mt-10">
        {links.map((link, index) => (
          <LinkItem key={index} name={link.name} link={link.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
