import Image from 'next/image';
import { Navigation } from './navigation';

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <div className="bg-gray-dark w-full flex justify-center">
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={500}
                    height={200}
                />
            </div>
            <Navigation />
            <div className="bg-yellow-logo h-1 w-full mt-2.5"></div>
        </header>
    );
}
