import Image from 'next/image';
import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
  } from '@heroicons/react/outline';
import HeaderItems from './HeaderItems';

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <HeaderItems title="HOME" Icon={LightningBoltIcon} />
                <HeaderItems title="HOME" Icon={BadgeCheckIcon} />
                <HeaderItems title="HOME" Icon={CollectionIcon} />
                <HeaderItems title="HOME" Icon={SearchIcon} />
                <HeaderItems title="HOME" Icon={UserIcon} />
            </div>
            <div className="">
                <Image
                className="object-contain"
                src="https://seekpng.com/png/detail/242-2424079_hulu-plus-logo-png-hulu-black-and-white.png"
                height={150}
                width={150}
                />
            </div>
        </header>
    );
};

export default Header;