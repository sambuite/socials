import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  SpotifyLogo,
  TiktokLogo,
  User,
} from 'phosphor-react';
import { SocialItem } from './components/SocialItem';

const links = [
  {
    name: 'Portfolio',
    link: 'https://portfolio-sambuite.vercel.app',
    children: User,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/murilosambuite/',
    children: LinkedinLogo,
  },
  {
    name: 'Github',
    link: 'https://github.com/sambuite',
    children: GithubLogo,
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/22cpeuchmgltmldtoz3vb4cba',
    children: SpotifyLogo,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sambuite_',
    children: InstagramLogo,
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@sambuite',
    children: TiktokLogo,
  },
];

function App() {
  // useEffect(() => {
  //   fetch('https://www.instagram.com/sambuite_/?__a=1')
  //     .catch((error) => console.log('error',error))
  //     .then((res) => console.log('success', res));
  // });

  return (
    <div className="">
      <div className="w-full lg:w-fit mx-auto">
        <div className="flex flex-col items-center mt-10">
          <img
            src="https://github.com/sambuite.png"
            alt=""
            className="rounded-full w-40 h-40"
          />
          <h1 className="text-2xl font-semibold mt-10">Murilo Sambuite</h1>
          <span className="text-lg">@sambuite</span>
          <span className="mt-6 text-sm text-slate-400">
            Desenvolvedor Frontend
          </span>
        </div>

        <div className="mt-10">
          {links.map((link, index) => (
            <SocialItem
              key={index}
              name={link.name}
              link={link.link}
              children={<link.children />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
