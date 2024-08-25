import Image from "next/image"

import {HL} from "@/lib/info"

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
        <main className={`main-cont p-4 md:p-10 lg:p-20`} style={{height: '100vh', overflowY: 'auto'}}>
            <div className='text-left'>
                <h1 className='default-font mb-6 text-4xl tracking-tighter'> my gallery </h1>
            </div>
            <p className="default-font text-neutral-300 mb-3 text-sm"><span className="text-neutral-500">
              i like to take photos. see my </span> <a href="https://vsco.co/srrfrhmn/gallery" target="_blank" rel="noopener noreferrer">vsco</a><span className="text-neutral-500"> for more.</span>
            </p>
            <HL />

            <div className="column-container" style={{maxHeight: '60vh'}}>
                {columns.map((columnImages, columnIndex) => (
                <div key={columnIndex} className="column-item">
                    {columnImages.map((src, index) => (
                    <Image key={index} className="p-1" src={src} alt="" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
                    ))}
                </div>
                ))}
            </div>
            
        </main>
      </>
    )
}