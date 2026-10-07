import Image from "next/image"
import { FiArrowUpRight } from 'react-icons/fi'


export default function Gallery() {

    const imagePaths = [
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/4.jpg',
        '/gallery/5.jpg',
        '/gallery/6.jpg',
        '/gallery/7.jpg',
        '/gallery/8.jpg',
        '/gallery/9.jpg',
        '/gallery/10.jpg',
        '/gallery/11.jpg',
        '/gallery/12.jpg',
        '/gallery/13.jpg',
        // '/gallery/14.jpg'
      ];

      const columns = Array.from({ length: 4 }, () => [] as string[]);

      imagePaths.forEach((src, index) => {
        const columnIndex = index % 4;
        columns[columnIndex].push(src);
      });

    return (
      <>
        <main id="main-content" className="main-cont">
            <div className='text-left'>
                <h1 className='default-font mb-2 text-4xl tracking-tighter'> my gallery </h1>
            </div>
            <p className="default-font text-neutral-300 text-sm"><span className="text-neutral-500">
              i like to take photos and post them on </span> <a className="inline-flex items-center underline underline-offset-4 hover:text-white" href="https://vsco.co/srrfrhmn/gallery" target="_blank" rel="noopener noreferrer">vsco<FiArrowUpRight size={20} aria-hidden="true" /></a><span className="text-neutral-500">.</span>
            </p>
            <hr className="page-divider" />

            <div className="column-container">
                {columns.map((columnImages, columnIndex) => (
                <div key={columnIndex} className="column-item">
                    {columnImages.map((src) => (
                    <a key={src} href="https://vsco.co/srrfrhmn/gallery" target="_blank" rel="noopener noreferrer" aria-label="View my photos on VSCO (opens in a new tab)" className="block transition-opacity hover:opacity-80">
                        <Image src={src} alt="" width={800} height={1000} sizes="(max-width: 640px) calc((100vw - 48px) / 2), (min-width: 1920px) 210px, 140px" style={{width: '100%', height: 'auto'}}/>
                    </a>
                    ))}
                </div>
                ))}
            </div>

        </main>
      </>
    )
}
